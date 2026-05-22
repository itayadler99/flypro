import { NextRequest, NextResponse } from "next/server";
import { BUSINESS } from "@/lib/business";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// PayPlus PaymentPage scaffold.
// TODO (Itay handles): fill PAYPLUS_API_KEY, PAYPLUS_SECRET_KEY, PAYPLUS_PAYMENT_PAGE_UID in Vercel.
// Docs: https://developers.payplus.co.il/docs/api/v1.0/PaymentPages-generateLink

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

  const apiKey = process.env.PAYPLUS_API_KEY;
  const secret = process.env.PAYPLUS_SECRET_KEY;
  const pageUid = process.env.PAYPLUS_PAYMENT_PAGE_UID;
  const env = process.env.PAYPLUS_ENV === "production" ? "production" : "sandbox";

  // Scaffold mode — return a placeholder URL when keys are not configured.
  if (!apiKey || !secret || !pageUid) {
    console.log("[payplus:scaffold]", { reason: "missing keys", input: body });
    return NextResponse.json({
      url: `/thank-you?order=SCAFFOLD-${Date.now()}`,
      scaffold: true,
    });
  }

  const base =
    env === "production"
      ? "https://restapi.payplus.co.il"
      : "https://restapidev.payplus.co.il";

  const orderId = `flypro-${Date.now()}`;
  const refundUrl = `${BUSINESS.siteUrl}/checkout`;
  const successUrl = `${BUSINESS.siteUrl}/thank-you?order=${orderId}`;
  const ipnUrl = `${BUSINESS.siteUrl}/api/purchase/webhook`;

  try {
    const res = await fetch(`${base}/api/v1.0/PaymentPages/generateLink`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: JSON.stringify({ api_key: apiKey, secret_key: secret }),
      },
      body: JSON.stringify({
        payment_page_uid: pageUid,
        amount: body.amount,
        currency_code: "ILS",
        more_info: orderId,
        sendEmailApproval: true,
        sendEmailFailure: false,
        customer: {
          customer_name: `${body.firstName || ""} ${body.lastName || ""}`.trim(),
          email: body.email,
          phone: body.phone,
        },
        max_payments: body.installments && body.installments > 1 ? body.installments : 1,
        refURL_success: successUrl,
        refURL_failure: refundUrl,
        refURL_cancel: refundUrl,
        refURL_callback: ipnUrl,
      }),
    });

    const data = (await res.json().catch(() => ({}))) as { data?: { payment_page_link?: string }; error?: string };
    if (!res.ok || !data?.data?.payment_page_link) {
      console.error("[payplus:error]", res.status, data);
      return NextResponse.json({ error: data?.error || "PayPlus error" }, { status: 502 });
    }

    return NextResponse.json({ url: data.data.payment_page_link, orderId });
  } catch (err) {
    console.error("[payplus:exception]", err);
    return NextResponse.json({ error: "PayPlus unavailable" }, { status: 502 });
  }
}
