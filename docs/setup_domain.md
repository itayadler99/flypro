# Setup — Custom Domain for FlyPro

3 options ordered by recommendation.

---

## Option A — flypro.co.il (best for Israel SEO + trust)

**Registrar:** Domain The Net Technologies (`domainthenet.com`) or ISOC-IL accredited registrar.

**Cost:** ₪80-150/year via ISOC-IL accredited registrar.

**Steps:**

1. Go to domainthenet.com (or registry.org.il for direct ISOC)
2. Search `flypro.co.il`
3. If available: register for 1-2 years
4. After purchase, log in to registrar DNS panel:
   - Add A record: `@` → `76.76.21.21` (Vercel anycast)
   - Add CNAME: `www` → `cname.vercel-dns.com`
5. In Vercel: project → Settings → Domains → Add `flypro.co.il`
6. Vercel auto-detects DNS, issues SSL cert in 1-5 min

---

## Option B — flypro.com (best if Israeli .co.il taken)

**Registrar:** Namecheap, Porkbun, or Cloudflare.

**Cost:** $9-12/year (Namecheap), $9-11/year (Porkbun).

**Steps:**

1. namecheap.com → search `flypro.com`
2. If $12/year, buy. If $1000+, walk away (likely premium-held)
3. After purchase: Domain List → Manage → Advanced DNS
4. Delete default records
5. Add:
   - A record: Host `@`, Value `76.76.21.21`, TTL Auto
   - CNAME: Host `www`, Value `cname.vercel-dns.com`, TTL Auto
6. In Vercel: project → Settings → Domains → Add `flypro.com`
7. Wait 5-30 min for DNS propagation + SSL

---

## Option C — get-flypro.com or flypro.io (fallback)

If flypro.com taken:
- `get-flypro.com` — adds CTA verb, still brandable
- `flypro.io` — tech-perceived, popular with creators
- `tryflypro.com`, `flyprohq.com`, `useflypro.com`

Same Namecheap/Porkbun process.

**Avoid:** `flypro.net`, `flypro.online`, `flypro.xyz` — kills trust on Israeli market.

---

## Vercel side — add domain via CLI

```bash
cd /Users/macbookpro/flypro
vercel domains add flypro.co.il --scope itay-agents
vercel domains add www.flypro.co.il --scope itay-agents

# Set primary
vercel alias https://flypro-eta.vercel.app flypro.co.il --scope itay-agents
```

Then DNS propagation check:
```bash
dig flypro.co.il +short
# expect: 76.76.21.21

curl -I https://flypro.co.il
# expect: HTTP/2 200, server: Vercel
```

---

## Post-domain updates

After domain is live, update these references:

### 1. Telegram webhook
Re-register webhook pointing at new domain:
```bash
curl -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook" \
  -d "url=https://flypro.co.il/api/telegram/webhook" \
  -d "secret_token=${TELEGRAM_WEBHOOK_SECRET}"
```

### 2. Meta ads
Update destination URLs in ad creatives:
- `flypro-eta.vercel.app` → `flypro.co.il`
- UTM tracking templates

### 3. Email signatures + footer
- Klaviyo templates
- Stripe receipts (`business.support_url`)

### 4. landing page metadata
Update `app/layout.tsx` openGraph URLs if explicit.

---

## SSL + redirects

Vercel handles automatically:
- ✓ HTTPS forced (HTTP → HTTPS redirect)
- ✓ `www.flypro.co.il` → `flypro.co.il` (or reverse, configurable in Vercel)
- ✓ Auto-renewing Let's Encrypt cert

To force `www` → root (or vice versa):
Vercel → Domains → click `www.flypro.co.il` → "Redirect to" → choose root.

---

## Cost recap

| Item | Cost | Renewal |
|------|------|---------|
| flypro.co.il domain | ₪100/year | yearly |
| flypro.com domain (alt) | $10/year | yearly |
| Vercel custom domain | $0 | included |
| SSL cert | $0 | auto |

**Total: ₪100/year** (or $10 if .com route).

---

## Action items (today)

- [ ] Check availability of `flypro.co.il` at domainthenet.com
- [ ] If taken, fallback to `flypro.com` at namecheap.com
- [ ] If both taken, pick option C
- [ ] Purchase
- [ ] Set DNS records per Vercel docs above
- [ ] Add domain in Vercel dashboard
- [ ] Wait 5-30 min for propagation
- [ ] Verify via `curl -I https://flypro.co.il`
- [ ] Update Telegram webhook URL
- [ ] Update Meta ad destination URLs
