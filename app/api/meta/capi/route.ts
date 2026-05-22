import { NextRequest, NextResponse } from "next/server";
import { sendCapiEvent } from "@/lib/meta-capi";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Server-side CAPI endpoint paired with the client-side Pixel.
// Send the same `event_id` from both sides to deduplicate.
//
// Body: { name, eventId, value?, currency?, email?, phone?, customData?, eventSourceUrl? }

type Body = {
  name: "PageView" | "ViewContent" | "Lead" | "InitiateCheckout" | "Purchase" | "CompleteRegistration";
  eventId?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  value?: number;
  currency?: string;
  eventSourceUrl?: string;
  customData?: Record<string, unknown>;
};

export async function POST(request: NextRequest) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body?.name) {
    return NextResponse.json({ error: "Missing event name" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined;
  const userAgent = request.headers.get("user-agent") || undefined;
  const fbp = request.cookies.get("_fbp")?.value;
  const fbc = request.cookies.get("_fbc")?.value;

  const result = await sendCapiEvent({
    name: body.name,
    eventId: body.eventId,
    email: body.email,
    phone: body.phone,
    firstName: body.firstName,
    lastName: body.lastName,
    value: body.value,
    currency: body.currency,
    customData: body.customData,
    eventSourceUrl: body.eventSourceUrl,
    ip,
    userAgent,
    fbp,
    fbc,
  });

  return NextResponse.json(result);
}
