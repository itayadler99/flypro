import { NextRequest, NextResponse } from "next/server";
import { subscribeProfile } from "@/lib/klaviyo";
import { sendCapiEvent } from "@/lib/meta-capi";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  email?: string;
  firstName?: string;
  phone?: string;
  eventId?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined;
  const userAgent = request.headers.get("user-agent") || undefined;
  const fbp = request.cookies.get("_fbp")?.value;
  const fbc = request.cookies.get("_fbc")?.value;

  const klaviyo = await subscribeProfile({
    email,
    firstName: body.firstName,
    phone: body.phone,
    properties: { source: body.source || "free-page" },
  });

  // Server-side Lead event with the same event_id as the client pixel.
  const capi = await sendCapiEvent({
    name: "Lead",
    eventId: body.eventId,
    email,
    phone: body.phone,
    firstName: body.firstName,
    eventSourceUrl: request.headers.get("referer") || undefined,
    ip,
    userAgent,
    fbp,
    fbc,
    currency: "ILS",
    value: 0,
    customData: { content_name: "5-deals-guide" },
  });

  return NextResponse.json({ ok: true, klaviyo: klaviyo.ok, capi: capi.ok });
}
