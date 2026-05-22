// Meta Conversions API helper — server-side event with dedup via event_id.
// Pairs with client-side fbq pixel events.
import { createHash, randomUUID } from "node:crypto";

type CapiEventName =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "InitiateCheckout"
  | "Purchase"
  | "CompleteRegistration";

type CapiEventInput = {
  name: CapiEventName;
  eventId?: string;
  eventSourceUrl?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  ip?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  value?: number;
  currency?: string;
  customData?: Record<string, unknown>;
};

function sha256(s: string): string {
  return createHash("sha256").update(s.trim().toLowerCase()).digest("hex");
}

function normalizePhone(raw: string): string {
  return raw.replace(/[^\d]/g, "");
}

export function generateEventId(): string {
  return randomUUID();
}

export async function sendCapiEvent(input: CapiEventInput): Promise<{ ok: boolean; status: number; body?: unknown }> {
  const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;

  if (!pixelId || !token) {
    console.log("[capi:fallback]", { event: input.name, reason: "missing META_PIXEL_ID or META_CAPI_TOKEN" });
    return { ok: true, status: 0, body: { fallback: true } };
  }

  const userData: Record<string, unknown> = {};
  if (input.email) userData.em = sha256(input.email);
  if (input.phone) userData.ph = sha256(normalizePhone(input.phone));
  if (input.firstName) userData.fn = sha256(input.firstName);
  if (input.lastName) userData.ln = sha256(input.lastName);
  if (input.ip) userData.client_ip_address = input.ip;
  if (input.userAgent) userData.client_user_agent = input.userAgent;
  if (input.fbp) userData.fbp = input.fbp;
  if (input.fbc) userData.fbc = input.fbc;

  const customData: Record<string, unknown> = { ...(input.customData || {}) };
  if (typeof input.value === "number") customData.value = input.value;
  if (input.currency) customData.currency = input.currency;

  const payload = {
    data: [
      {
        event_name: input.name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId || generateEventId(),
        action_source: "website",
        event_source_url: input.eventSourceUrl,
        user_data: userData,
        custom_data: customData,
      },
    ],
    ...(process.env.META_CAPI_TEST_CODE ? { test_event_code: process.env.META_CAPI_TEST_CODE } : {}),
  };

  try {
    const res = await fetch(`https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const status = res.status;
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[capi:error]", status, body);
      return { ok: false, status, body };
    }
    return { ok: true, status };
  } catch (err) {
    console.error("[capi:exception]", err);
    return { ok: false, status: 0, body: String(err) };
  }
}
