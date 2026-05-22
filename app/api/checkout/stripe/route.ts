import { NextRequest, NextResponse } from "next/server";
import { BUSINESS } from "@/lib/business";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Stripe Checkout Session scaffold (fallback for non-IL traffic).
// TODO (Itay handles): set STRIPE_SECRET_KEY in Vercel.
// Uses direct REST call to avoid pulling the Stripe SDK as a dep — keeps install lean.

type Body = {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  amount?: number;
  installments?: number;
  eventId?: string;
};

export async function POST(request: NextRequest) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.email || !body.amount) {
    return NextResponse.json({ error: "Missing email or amount" }, { status: 400 });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    console.log("[stripe:scaffold]", { reason: "missing STRIPE_SECRET_KEY", input: body });
    return NextResponse.json({
      url: `/thank-you?order=SCAFFOLD-${Date.now()}`,
      scaffold: true,
    });
  }

  const orderId = `flypro-${Date.now()}`;
  const successUrl = `${BUSINESS.siteUrl}/thank-you?order=${orderId}`;
  const cancelUrl = `${BUSINESS.siteUrl}/checkout`;

  // Convert ILS to agorot (Stripe uses smallest unit).
  const amountAgorot = Math.round(body.amount * 100);

  const params = new URLSearchParams({
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    "line_items[0][price_data][currency]": "ils",
    "line_items[0][price_data][product_data][name]": "FlyPro Course",
    "line_items[0][price_data][unit_amount]": String(amountAgorot),
    "line_items[0][quantity]": "1",
    customer_email: body.email,
    "metadata[order_id]": orderId,
    "metadata[event_id]": body.eventId || "",
  });

  try {
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = (await res.json().catch(() => ({}))) as { url?: string; error?: { message?: string } };
    if (!res.ok || !data?.url) {
      console.error("[stripe:error]", res.status, data);
      return NextResponse.json({ error: data?.error?.message || "Stripe error" }, { status: 502 });
    }

    return NextResponse.json({ url: data.url, orderId });
  } catch (err) {
    console.error("[stripe:exception]", err);
    return NextResponse.json({ error: "Stripe unavailable" }, { status: 502 });
  }
}
