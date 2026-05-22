import { NextRequest, NextResponse } from "next/server";

// Vercel Cron: scheduled scrape of TLV-origin flight deals.
// Trigger: cron schedule in vercel.json calls GET on this route.
// Auth: Vercel signs cron requests with CRON_SECRET header.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

type Deal = {
  origin: string;
  destination: string;
  price: number;
  currency: string;
  airline: string;
  outboundDate: string;
  inboundDate: string;
  deepLink: string;
  discoveredAt: string;
  savingsPct?: number;
};

// Routes to scan on each cron tick. TLV origin, top 12 destinations by interest.
const ROUTES = [
  { dest: "FCO", name: "רומא", baseline: 487 },
  { dest: "BUD", name: "בודפשט", baseline: 320 },
  { dest: "ATH", name: "אתונה", baseline: 240 },
  { dest: "LHR", name: "לונדון", baseline: 410 },
  { dest: "CDG", name: "פריז", baseline: 440 },
  { dest: "BCN", name: "ברצלונה", baseline: 380 },
  { dest: "JFK", name: "ניו יורק", baseline: 890 },
  { dest: "BKK", name: "בנגקוק", baseline: 720 },
  { dest: "NRT", name: "טוקיו", baseline: 1100 },
  { dest: "SOF", name: "סופיה", baseline: 280 },
  { dest: "PRG", name: "פראג", baseline: 360 },
  { dest: "AMS", name: "אמסטרדם", baseline: 430 },
];

// Deal threshold — only surface flights at least 35% below baseline.
const SAVINGS_THRESHOLD = 0.35;

async function fetchKiwiPrice(
  destination: string
): Promise<{ price: number; airline: string; deepLink: string; outboundDate: string; inboundDate: string } | null> {
  const apiKey = process.env.KIWI_API_KEY;
  if (!apiKey) return null;

  const today = new Date();
  const dateFrom = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const dateTo = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000);

  const fmt = (d: Date) =>
    `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;

  const url = new URL("https://api.tequila.kiwi.com/v2/search");
  url.searchParams.set("fly_from", "TLV");
  url.searchParams.set("fly_to", destination);
  url.searchParams.set("date_from", fmt(dateFrom));
  url.searchParams.set("date_to", fmt(dateTo));
  url.searchParams.set("return_from", fmt(dateFrom));
  url.searchParams.set("return_to", fmt(dateTo));
  url.searchParams.set("nights_in_dst_from", "3");
  url.searchParams.set("nights_in_dst_to", "14");
  url.searchParams.set("curr", "USD");
  url.searchParams.set("sort", "price");
  url.searchParams.set("limit", "1");

  try {
    const res = await fetch(url.toString(), {
      headers: { apikey: apiKey },
      next: { revalidate: 0 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const flight = data?.data?.[0];
    if (!flight) return null;
    return {
      price: flight.price,
      airline: flight.airlines?.[0] ?? "Unknown",
      deepLink: flight.deep_link,
      outboundDate: flight.local_departure?.split("T")[0] ?? "",
      inboundDate: flight.route?.slice(-1)[0]?.local_departure?.split("T")[0] ?? "",
    };
  } catch {
    return null;
  }
}

async function getSubscribers(): Promise<number[]> {
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (!kvUrl || !kvToken) return [];
  try {
    const res = await fetch(`${kvUrl}/smembers/subscribers`, {
      headers: { Authorization: `Bearer ${kvToken}` },
    });
    const data = await res.json();
    return (data?.result ?? []).map((x: string) => Number(x)).filter(Boolean);
  } catch {
    return [];
  }
}

async function incrementDealCount(n: number) {
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (!kvUrl || !kvToken) return;
  await fetch(`${kvUrl}/incrby/stats:total_deals/${n}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${kvToken}` },
  });
}

async function storeRecentDeals(deals: Deal[]) {
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (!kvUrl || !kvToken || deals.length === 0) return;
  for (const d of deals) {
    await fetch(`${kvUrl}/lpush/deals:recent`, {
      method: "POST",
      headers: { Authorization: `Bearer ${kvToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ value: JSON.stringify(d) }),
    });
  }
  // Keep last 50 deals only.
  await fetch(`${kvUrl}/ltrim/deals:recent/0/49`, {
    method: "POST",
    headers: { Authorization: `Bearer ${kvToken}` },
  });
}

async function sendToTelegram(chatId: number | string, text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return;
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
      disable_web_page_preview: false,
    }),
  });
}

async function notifyTelegram(deals: Deal[]) {
  if (deals.length === 0) return;

  const lines = deals.map((d) => {
    const pct = d.savingsPct ? `-${Math.round(d.savingsPct * 100)}%` : "";
    return `✈️ *TLV → ${d.destination}*\n💰 $${d.price} ${pct}\n📅 ${d.outboundDate} - ${d.inboundDate}\n🛫 ${d.airline}\n[הזמן עכשיו](${d.deepLink})`;
  });

  const text = `🚨 *FlyPro Deal Alert*\n\n${lines.join("\n\n━━━━━━━━━━\n\n")}\n\n_FlyPro Member Hub_`;

  // 1) Public channel (if configured)
  if (process.env.TELEGRAM_CHANNEL_ID) {
    await sendToTelegram(process.env.TELEGRAM_CHANNEL_ID, text);
  }

  // 2) All subscribers from KV (sequential to avoid Telegram rate limits — 30 msg/sec)
  const subs = await getSubscribers();
  for (const chatId of subs) {
    await sendToTelegram(chatId, text);
    await new Promise((r) => setTimeout(r, 50));
  }

  await incrementDealCount(deals.length);
}

export async function GET(request: NextRequest) {
  // Vercel Cron auth check
  const authHeader = request.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const startedAt = new Date().toISOString();
  const deals: Deal[] = [];
  const errors: string[] = [];

  for (const route of ROUTES) {
    try {
      const result = await fetchKiwiPrice(route.dest);
      if (!result) continue;
      const savingsPct = (route.baseline - result.price) / route.baseline;
      if (savingsPct >= SAVINGS_THRESHOLD) {
        deals.push({
          origin: "TLV",
          destination: route.dest,
          price: result.price,
          currency: "USD",
          airline: result.airline,
          outboundDate: result.outboundDate,
          inboundDate: result.inboundDate,
          deepLink: result.deepLink,
          discoveredAt: new Date().toISOString(),
          savingsPct,
        });
      }
    } catch (err) {
      errors.push(`${route.dest}: ${(err as Error).message}`);
    }
  }

  if (deals.length > 0) {
    await notifyTelegram(deals);
    await storeRecentDeals(deals);
  }

  return NextResponse.json({
    ok: true,
    startedAt,
    finishedAt: new Date().toISOString(),
    routesScanned: ROUTES.length,
    dealsFound: deals.length,
    deals,
    errors,
  });
}
