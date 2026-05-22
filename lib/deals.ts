// Recent deals reader — pulls from Upstash KV list `deals:recent`.

export type StoredDeal = {
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

export async function getRecentDeals(limit = 5): Promise<StoredDeal[]> {
  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;
  if (!kvUrl || !kvToken) return [];

  try {
    const res = await fetch(`${kvUrl}/lrange/deals:recent/0/${limit - 1}`, {
      headers: { Authorization: `Bearer ${kvToken}` },
      cache: "no-store",
    });
    const data = await res.json();
    const items: string[] = data?.result ?? [];
    return items
      .map((raw) => {
        try {
          return JSON.parse(raw) as StoredDeal;
        } catch {
          return null;
        }
      })
      .filter(Boolean) as StoredDeal[];
  } catch {
    return [];
  }
}

export function formatDealHebrew(d: StoredDeal): string {
  const pct = d.savingsPct ? `-${Math.round(d.savingsPct * 100)}%` : "";
  return `✈️ *TLV → ${d.destination}*\n💰 $${d.price} ${pct}\n📅 ${d.outboundDate} → ${d.inboundDate}\n🛫 ${d.airline}\n[הזמן עכשיו](${d.deepLink})`;
}
