import { NextRequest, NextResponse } from "next/server";
import { sendWhatsappText } from "@/lib/whatsapp";
import { getRecentDeals, formatDealHebrew } from "@/lib/deals";

// WhatsApp Cloud API webhook.
// GET: verification handshake (Meta sends hub.challenge during setup).
// POST: incoming messages from users.
//
// Setup: configure webhook in Meta App Dashboard → WhatsApp → Configuration
// with Verify Token = WHATSAPP_VERIFY_TOKEN and Callback URL = https://flypro.co.il/api/whatsapp/webhook

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type WaMessage = {
  from: string;
  id?: string;
  type?: string;
  text?: { body?: string };
};

type WaWebhookBody = {
  entry?: Array<{
    changes?: Array<{
      value?: {
        messages?: WaMessage[];
        contacts?: Array<{ wa_id?: string; profile?: { name?: string } }>;
      };
    }>;
  }>;
};

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const mode = params.get("hub.mode");
  const token = params.get("hub.verify_token");
  const challenge = params.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN && challenge) {
    return new Response(challenge, { status: 200, headers: { "content-type": "text/plain" } });
  }
  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

export async function POST(request: NextRequest) {
  let body: WaWebhookBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: true });
  }

  // Always ack within 5s — process async.
  void handleMessages(body);

  return NextResponse.json({ ok: true });
}

async function handleMessages(body: WaWebhookBody): Promise<void> {
  const messages = body?.entry?.[0]?.changes?.[0]?.value?.messages || [];
  for (const msg of messages) {
    const from = msg.from;
    const text = msg.text?.body?.trim().toLowerCase() || "";
    if (!from) continue;

    if (text === "/start" || text.includes("שלום") || text.includes("היי")) {
      await sendWhatsappText(
        from,
        "ברוך הבא ל-FlyPro. הבוט שולח התראות על דילי טיסה. כתוב /deals לדילים אחרונים או /premium למידע על הקורס המלא."
      );
    } else if (text === "/deals") {
      const deals = await getRecentDeals(3);
      if (deals.length === 0) {
        await sendWhatsappText(from, "אין דילים שמורים כרגע. הסריקה הבאה תוך פחות מ-3 שעות.");
      } else {
        const body = deals.map(formatDealHebrew).join("\n\n━━━━━━━━━━\n\n");
        await sendWhatsappText(from, `🔥 הדילים האחרונים\n\n${body}`);
      }
    } else if (text === "/premium") {
      await sendWhatsappText(
        from,
        "FlyPro — הקורס המלא: 12 מודולים, ארגז כלים, אחריות תוצאה. ₪397 חד-פעמי או 3 תשלומים של ₪139.\nhttps://flypro.co.il"
      );
    } else if (text === "/stop" || text === "stop" || text === "הסר" || text === "/unsubscribe") {
      await sendWhatsappText(from, "ההתראות הופסקו. ניתן להירשם שוב בכל עת.");
    } else {
      await sendWhatsappText(
        from,
        "פקודות: /deals — דילים אחרונים · /premium — הקורס המלא · /stop — הפסקת הודעות"
      );
    }
  }
}
