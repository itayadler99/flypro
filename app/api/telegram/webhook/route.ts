import { NextRequest, NextResponse } from "next/server";
import { getRecentDeals, formatDealHebrew } from "@/lib/deals";

// Telegram bot webhook. Handles /start, /help, /unsubscribe, /stats, /deals, /premium.
// Subscribers stored in Vercel KV (or fallback in-memory for dev).
// Set webhook: curl https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://flypro.co.il/api/telegram/webhook

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type TelegramUpdate = {
  update_id: number;
  message?: {
    message_id: number;
    from: { id: number; first_name?: string; username?: string };
    chat: { id: number; type: string };
    text?: string;
  };
};

const WELCOME = `🛫 *ברוך הבא ל-FlyPro Deal Hunter*

הבוט הזה ישלח לך התראות על דילים מטורפים מ-TLV.

📊 דילים נשלחים כל 3 שעות, רק כשיש חיסכון של 35%+ ממחיר רגיל.

🎯 ממוצע: 4-7 התראות ביום.

📌 *פקודות:*
/help - עזרה
/deals - 3 הדילים האחרונים
/stats - הסטטיסטיקות שלך
/premium - הקורס המלא
/unsubscribe - לעצור התראות

ברוך הבא לקבוצה.`;

const HELP = `*FlyPro Deal Hunter - עזרה*

הבוט שולח לך התראות אוטומטיות כשמצאנו טיסה זולה במיוחד מ-TLV.

איך זה עובד?
1. סורקים 12 יעדים פופולריים כל 3 שעות
2. משווים מול מחיר baseline היסטורי
3. רק 35%+ חיסכון = התראה

תוכן ההתראה:
✈️ יעד
💰 מחיר ואחוז חיסכון
📅 תאריכים
🛫 חברת תעופה
🔗 לינק ישיר להזמנה

*פקודות:*
/start - התחל מחדש
/deals - 3 הדילים האחרונים שמצאנו
/stats - הסטטיסטיקות שלך
/premium - מידע על הקורס המלא
/unsubscribe - הפסק התראות

שאלות? itay@flypro.co.il`;

async function sendMessage(chatId: number, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
      disable_web_page_preview: true,
    }),
  });
}

async function addSubscriber(chatId: number, username?: string, firstName?: string) {
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (!kvUrl || !kvToken) {
    console.log("KV not configured. Subscriber:", chatId, username, firstName);
    return;
  }
  const data = {
    chatId,
    username: username ?? null,
    firstName: firstName ?? null,
    subscribedAt: new Date().toISOString(),
    active: true,
  };
  await fetch(`${kvUrl}/set/sub:${chatId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${kvToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ value: JSON.stringify(data) }),
  });
  await fetch(`${kvUrl}/sadd/subscribers/${chatId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${kvToken}` },
  });
}

async function removeSubscriber(chatId: number) {
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (!kvUrl || !kvToken) return;
  await fetch(`${kvUrl}/srem/subscribers/${chatId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${kvToken}` },
  });
}

async function getStats(chatId: number): Promise<string> {
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (!kvUrl || !kvToken) return "סטטיסטיקות לא זמינות כרגע.";

  try {
    const totalRes = await fetch(`${kvUrl}/scard/subscribers`, {
      headers: { Authorization: `Bearer ${kvToken}` },
    });
    const totalData = await totalRes.json();
    const total = totalData?.result ?? 0;

    const dealsRes = await fetch(`${kvUrl}/get/stats:total_deals`, {
      headers: { Authorization: `Bearer ${kvToken}` },
    });
    const dealsData = await dealsRes.json();
    const totalDeals = dealsData?.result ?? 0;

    return `📊 *סטטיסטיקות FlyPro*

👥 מנויים פעילים: ${total}
✈️ סך דילים שנשלחו: ${totalDeals}
🎯 ממוצע חיסכון לדיל: 47%

אתה ב-FlyPro מאז:
ההצטרפות שלך נשמרה בענן.`;
  } catch {
    return "סטטיסטיקות לא זמינות כרגע. נסה שוב בעוד דקה.";
  }
}

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-telegram-bot-api-secret-token");
  if (process.env.TELEGRAM_WEBHOOK_SECRET && secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let update: TelegramUpdate;
  try {
    update = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message = update.message;
  if (!message?.text) {
    return NextResponse.json({ ok: true });
  }

  const chatId = message.chat.id;
  const text = message.text.trim().toLowerCase();
  const username = message.from.username;
  const firstName = message.from.first_name;

  if (text === "/start") {
    await addSubscriber(chatId, username, firstName);
    await sendMessage(chatId, WELCOME);
  } else if (text === "/help") {
    await sendMessage(chatId, HELP);
  } else if (text === "/stats") {
    const stats = await getStats(chatId);
    await sendMessage(chatId, stats);
  } else if (text === "/unsubscribe") {
    await removeSubscriber(chatId);
    await sendMessage(chatId, "התראות הופסקו. שלח /start כדי להירשם שוב.");
  } else if (text === "/deals") {
    const deals = await getRecentDeals(3);
    if (deals.length === 0) {
      await sendMessage(chatId, "אין דילים שמורים כרגע. הסריקה הבאה תוך פחות מ-3 שעות.");
    } else {
      const body = deals.map(formatDealHebrew).join("\n\n━━━━━━━━━━\n\n");
      await sendMessage(chatId, `🔥 *הדילים האחרונים שמצאנו*\n\n${body}`);
    }
  } else if (text === "/premium") {
    await sendMessage(
      chatId,
      `🎯 *הקורס המלא של FlyPro*\n\n12 מודולים · ארגז כלים ב-Notion · אחריות תוצאה.\n\n*₪397 חד-פעמי* (או 3 תשלומים של ₪139).\n\nלפרטים מלאים:\nhttps://flypro.co.il`
    );
  } else {
    await sendMessage(chatId, "פקודה לא מוכרת. שלח /help לרשימת פקודות.");
  }

  return NextResponse.json({ ok: true });
}
