# Setup — FlyPro Deal Hunter Telegram Bot

5-step setup. ~15 min total.

---

## 1. Create bot (3 min)

1. Open Telegram, search `@BotFather`
2. Send `/newbot`
3. Name: `FlyPro Deal Hunter`
4. Username: `FlyProDealsBot` (or alternative if taken)
5. Save the **bot token** BotFather returns

Set bot description + commands:
```
/setdescription
FlyPro Deal Hunter — התראות אוטומטיות על טיסות זולות מ-TLV. דילים עם 35%+ חיסכון, כל 3 שעות.

/setcommands
start - הירשם לקבלת דילים
help - עזרה
stats - הסטטיסטיקות שלך
unsubscribe - הפסק התראות
```

---

## 2. Create Vercel KV store (3 min)

```bash
cd /Users/macbookpro/flypro
vercel kv create flypro-subscribers --scope itay-agents
vercel env pull .env.local --scope itay-agents
```

Or via dashboard: vercel.com → flypro → Storage → Create Database → KV (Upstash).

Auto-linked env vars:
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

---

## 3. Set env vars in Vercel (3 min)

```bash
# Generate webhook secret
WEBHOOK_SECRET=$(openssl rand -hex 16)
echo $WEBHOOK_SECRET  # save this

# Set in Vercel
vercel env add TELEGRAM_BOT_TOKEN production --scope itay-agents
# paste bot token from BotFather

vercel env add TELEGRAM_WEBHOOK_SECRET production --scope itay-agents
# paste $WEBHOOK_SECRET

vercel env add CRON_SECRET production --scope itay-agents
# paste output of: openssl rand -base64 32

vercel env add KIWI_API_KEY production --scope itay-agents
# paste from tequila.kiwi.com (free tier OK initially)
```

Then redeploy:
```bash
vercel --prod --scope itay-agents
```

---

## 4. Register Telegram webhook (1 min)

```bash
BOT_TOKEN="<your-bot-token>"
WEBHOOK_SECRET="<your-webhook-secret>"
DOMAIN="flypro.co.il"   # or flypro-eta.vercel.app if domain not yet connected

curl -X POST "https://api.telegram.org/bot${BOT_TOKEN}/setWebhook" \
  -H "Content-Type: application/json" \
  -d "{
    \"url\": \"https://${DOMAIN}/api/telegram/webhook\",
    \"secret_token\": \"${WEBHOOK_SECRET}\",
    \"allowed_updates\": [\"message\"]
  }"
```

Verify:
```bash
curl "https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo"
```

Should return `"url": "https://flypro.co.il/api/telegram/webhook"` and `"pending_update_count": 0`.

---

## 5. Test (5 min)

1. Open Telegram, search `@FlyProDealsBot`
2. Send `/start` → should reply with welcome message
3. Send `/stats` → should show 1 subscriber (you)
4. Trigger cron manually:
   ```bash
   curl -H "Authorization: Bearer $CRON_SECRET" \
     https://flypro.co.il/api/cron/scrape-deals
   ```
5. If any deals exist, you should receive a Telegram message.

---

## How subscribers get added

**Path A — directly from /start:**
User finds bot, sends /start → auto-subscribed.

**Path B — from landing page (recommended):**
Add a button to flypro.co.il: "📲 קבל התראות חינם בטלגרם" → links to `https://t.me/FlyProDealsBot?start=lead`

**Path C — after purchase:**
Post-purchase email: "הצטרף לבוט הדילים הפרטי שלנו (בונוס #1)" → same Telegram link.

---

## Monitoring

- Cron logs: vercel.com → flypro → Logs → filter `/api/cron/scrape-deals`
- Bot interactions: filter `/api/telegram/webhook`
- KV usage: vercel.com → Storage → flypro-subscribers → Metrics
- Telegram API errors: usually rate limit (30 msg/sec). Code already handles via 50ms delays.

---

## Cost estimate (first 1000 subscribers)

| Service | Free tier | Expected usage | Cost |
|---------|-----------|----------------|------|
| Vercel Functions | 100k invocations/month | ~240 cron runs + 5k user msgs | $0 |
| Vercel KV | 30k commands/day | ~5k commands/day | $0 |
| Kiwi Tequila API | 100 calls/day (free) | 12 routes × 8 cron runs = 96/day | $0 |
| Telegram Bot API | Unlimited | ~1k deal msgs/day | $0 |

**Total: $0/month** up to ~3,000 subscribers.

Once at 5k+ subscribers OR 1M+ KV commands, upgrade to Vercel Pro ($20/month).
