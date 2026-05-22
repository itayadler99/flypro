import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { tagPurchaser } from "@/lib/klaviyo";
import { createMemberAccess } from "@/lib/notion";
import { sendCapiEvent } from "@/lib/meta-capi";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Generic post-purchase webhook. Called by the payment provider (PayPlus IPN or Stripe).
// Shape (normalised): { email, orderId, plan, amount, currency, eventId? }
//
// Provider-specific signature verification:
//  - PayPlus: header `x-payplus-signature` = HMAC-SHA256(secret, raw body)
//  - Stripe:  header `stripe-signature` — verified with stripe SDK (kept out of scope here)
// For provider-agnostic security we accept a generic `x-flypro-signature` header signed with PURCHASE_WEBHOOK_SECRET.

type Body = {
  email?: string;
  orderId?: string;
  plan?: string;
  amount?: number;
  currency?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  eventId?: string;
};

function verifySignature(raw: string, header: string | null): boolean {
  const secret = process.env.PURCHASE_WEBHOOK_SECRET;
  if (!secret) {
    if (process.env.VERCEL_ENV === "production") {
      console.error("[purchase:webhook] PURCHASE_WEBHOOK_SECRET unset in production — rejecting");
      return false;
    }
    console.warn("[purchase:webhook] no PURCHASE_WEBHOOK_SECRET — accepting unsigned (dev mode)");
    return true;
  }
  if (!header) return false;
  const expected = createHmac("sha256", secret).update(raw).digest("hex");
  try {
    const a = Buffer.from(expected);
    const b = Buffer.from(header);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const raw = await request.text();
  const sig = request.headers.get("x-flypro-signature");
  if (!verifySignature(raw, sig)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let body: Body;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const plan = body.plan || "core-397";
  const amount = typeof body.amount === "number" ? body.amount : 397;
  const currency = body.currency || "ILS";

  // 1. Klaviyo: add to members list with purchased=true.
  await tagPurchaser(email, plan);

  // 2. Notion: create member access link.
  const access = await createMemberAccess(email);

  // 3. Meta CAPI: server-side Purchase event (dedup with client-side fired on /thank-you).
  await sendCapiEvent({
    name: "Purchase",
    eventId: body.eventId,
    email,
    phone: body.phone,
    firstName: body.firstName,
    lastName: body.lastName,
    value: amount,
    currency,
    customData: { content_name: "FlyPro Course", order_id: body.orderId, plan },
  });

  return NextResponse.json({
    ok: true,
    accessUrl: access.url,
    accessSource: access.source,
  });
}
