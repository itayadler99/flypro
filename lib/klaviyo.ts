// Klaviyo profile-subscription helper.
// Server-only. Requires KLAVIYO_API_KEY (private pk_*).
// Falls back to console.log when no key configured.

type SubscribeInput = {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  listId?: string;
  properties?: Record<string, unknown>;
};

const KLAVIYO_API = "https://a.klaviyo.com/api";
const KLAVIYO_REVISION = "2025-07-15";

export async function subscribeProfile(input: SubscribeInput): Promise<{ ok: boolean; status: number; body?: unknown }> {
  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = input.listId || process.env.KLAVIYO_LIST_ID_LEADS;

  if (!apiKey || !listId) {
    console.log("[klaviyo:fallback]", { ...input, listId, reason: "missing KLAVIYO_API_KEY or list id" });
    return { ok: true, status: 0, body: { fallback: true } };
  }

  const payload = {
    data: {
      type: "profile-subscription-bulk-create-job",
      attributes: {
        profiles: {
          data: [
            {
              type: "profile",
              attributes: {
                email: input.email,
                ...(input.phone ? { phone_number: input.phone } : {}),
                ...(input.firstName ? { first_name: input.firstName } : {}),
                ...(input.lastName ? { last_name: input.lastName } : {}),
                properties: {
                  course: "flypro",
                  language: "he",
                  ...(input.properties || {}),
                },
                subscriptions: {
                  email: { marketing: { consent: "SUBSCRIBED" } },
                  ...(input.phone ? { sms: { marketing: { consent: "SUBSCRIBED" } } } : {}),
                },
              },
            },
          ],
        },
      },
      relationships: {
        list: { data: { type: "list", id: listId } },
      },
    },
  };

  try {
    const res = await fetch(`${KLAVIYO_API}/profile-subscription-bulk-create-jobs/`, {
      method: "POST",
      headers: {
        Authorization: `Klaviyo-API-Key ${apiKey}`,
        revision: KLAVIYO_REVISION,
        accept: "application/vnd.api+json",
        "content-type": "application/vnd.api+json",
      },
      body: JSON.stringify(payload),
    });

    const status = res.status;
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[klaviyo:error]", status, body);
      return { ok: false, status, body };
    }
    return { ok: true, status };
  } catch (err) {
    console.error("[klaviyo:exception]", err);
    return { ok: false, status: 0, body: String(err) };
  }
}

export async function tagPurchaser(email: string, plan: string): Promise<void> {
  // Lightweight wrapper to mark a purchaser. Adds them to the members list with a `purchased=true` property.
  const membersList = process.env.KLAVIYO_LIST_ID_MEMBERS;
  await subscribeProfile({
    email,
    listId: membersList,
    properties: { purchased: true, plan, purchased_at: new Date().toISOString() },
  });
}
