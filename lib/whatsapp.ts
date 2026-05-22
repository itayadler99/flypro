// WhatsApp Cloud API send-message helper. Server-only.

export async function sendWhatsappText(to: string, text: string): Promise<{ ok: boolean; status: number; body?: unknown }> {
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const token = process.env.WHATSAPP_TOKEN;

  if (!phoneId || !token) {
    console.log("[whatsapp:fallback]", { to, text, reason: "missing WHATSAPP_PHONE_ID or WHATSAPP_TOKEN" });
    return { ok: true, status: 0, body: { fallback: true } };
  }

  try {
    const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: text },
      }),
    });
    const status = res.status;
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[whatsapp:error]", status, body);
      return { ok: false, status, body };
    }
    return { ok: true, status };
  } catch (err) {
    console.error("[whatsapp:exception]", err);
    return { ok: false, status: 0, body: String(err) };
  }
}
