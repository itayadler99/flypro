# FlyPro — Notion Hub Structure

Member-only Notion workspace. Single source of truth for the product.
Import this markdown into Notion to scaffold the hub, then customize per page.

---

## Workspace tree

```
🛫 FlyPro Member Hub
├── 👋 התחל כאן (Start Here)
├── 📚 12 המודולים (The Modules)
│   ├── מודול 1 — The Mindset
│   ├── מודול 2 — The Stack
│   ├── מודול 3 — Positioning Play
│   ├── מודול 4 — ITA Matrix
│   ├── מודול 5 — Stopovers
│   ├── מודול 6 — Hidden City
│   ├── מודול 7 — Error Fares
│   ├── מודול 8 — Multi-City Hacks
│   ├── מודול 9 — Currency + VPN
│   ├── מודול 10 — Israel Plays
│   ├── מודול 11 — Booking Day
│   └── מודול 12 — 5 חיפושים מלאים
├── 🛠 כלי השיטה (The Tools)
│   ├── The Stack Cheat Sheet
│   ├── מאגר קודי ITA Matrix
│   ├── רשימת Stopover Hubs
│   ├── 50 Error Fares היסטוריות
│   ├── מטריצת מטבעות + VPN
│   ├── רשימת LCC ישראלים
│   └── תבנית חיפוש (Worksheet)
├── 🎁 הבונוסים
│   ├── בונוס 1 — Deal Hunter Bot
│   ├── בונוס 2 — Error Fares Archive
│   ├── בונוס 3 — Premium Flights Guide
│   └── בונוס 4 — קבוצת וואטסאפ
├── 💬 הקהילה
│   ├── קבוצת וואטסאפ (Link)
│   ├── דילים שבועיים
│   └── שאלות + תשובות
├── 🔄 עדכונים
│   ├── יומן עדכונים
│   ├── שינויים בכלים (Skyscanner/ITA/וכו׳)
│   └── תוספות שיטה
└── ⚙️ הגדרות חשבון
    ├── שינוי דוא״ל
    ├── ביטול גישה
    └── תמיכה
```

---

## 👋 התחל כאן (Start Here)

**Page type:** Cover image + sections
**Cover:** Dark gradient — sky/cyan, FlyPro logo top-right
**Icon:** 🛫

### Content blocks

#### Block 1 — Welcome (callout, sky-blue)

> **ברוך הבא ל-FlyPro.**
>
> נכנסת לחבר בקבוצה מצומצמת. רוב הישראלים ישלמו מחיר מלא על טיסות שלהם השנה. אתה לא.
>
> 12 מודולים. שעתיים וחצי. שיטה לכל החיים.

#### Block 2 — How to use this hub

1. **התחל ממודול 1** — לא לדלג. ה-Mindset חשוב למודולים הבאים.
2. **השלם מודולים 1-2 ביום אחד** — בסיס מלא לפני שמתחילים את השיטות הספציפיות.
3. **מודולים 3-10 — לפי קצב שלך.** כל אחד בנוי לעמוד לבד.
4. **מודול 11-12 — מעשי.** השלם רק אחרי שיש לך טיסה אמיתית בראש.

#### Block 3 — Quick Win Path (toggle)

> רוצה לחסוך כסף על טיסה אחת ספציפית, מהר? עקוב אחרי המסלול הזה:
>
> 1. צפה במודול 2 (The Stack) — 12 דק׳
> 2. הורד את The Stack Cheat Sheet
> 3. עקוב אחרי 5 הכלים בסדר
> 4. חזור לקבוצת הוואטסאפ עם השאלה הספציפית שלך

#### Block 4 — Resource links (3-column gallery)

- 🛠 **כלי השיטה** → [link]
- 🎁 **הבונוסים** → [link]
- 💬 **הקהילה** → [link]

---

## 📚 12 המודולים — Database view

**Database type:** Page database
**Default view:** Gallery, sorted by `Module number` ascending
**Properties:**

| Property | Type | Notes |
|----------|------|-------|
| Title | Title | "מודול X — שם" |
| Module number | Number | 1-12 |
| Duration | Text | "8 דק׳" |
| Status | Select | לא נצפה / בתהליך / הושלם |
| Video URL | URL | Wistia/Vimeo private |
| PDF Companion | File | Cheat sheet for module |
| Worksheet | File | Practice doc |
| Watched on | Date | Auto-fill via Notion automation |
| Notes (mine) | Text | Student's personal notes |

### Each module page contains:

1. **Header callout:** "מודול X · משך · השיטה שתלמד"
2. **Embedded video** (Wistia/Vimeo iframe)
3. **תוכן עניינים** (toggle list — sections + timestamps)
4. **המסקנות העיקריות** (bulleted, 3-5 points)
5. **דברים שכדאי לכתוב לעצמך** (callout — empty space for student notes)
6. **כלי המודול** (file attachments — cheat sheets, codes)
7. **תרגיל מעשי** (numbered list, 3-5 steps)
8. **מודול הבא →** (link to next module's page)
9. **שאלות נפוצות** (toggle, 3-5 Q&A)

---

## 🛠 כלי השיטה — Tools subspace

### Page: The Stack Cheat Sheet

**Format:** Single PDF + inline preview
**Content:** One-pager. 5 tools, in order, with:
- Tool name + URL
- What you do in this tool (1 sentence)
- What you DON'T do here (1 sentence — anti-pattern)
- Time budget per tool

**Design:** Black background, sky-blue numbers 1-5, white tool names. Mobile-readable.

### Page: מאגר קודי ITA Matrix

**Format:** Notion table (sortable, filterable)

| Code | Use case | Example route | Savings |
|------|----------|---------------|---------|
| `f bc=W` | Cheapest sub-fare class | TLV-FCO | $44 |
| `routing TLV-ATH-FCO` | Forced routing through Athens | TLV-FCO | $341 |
| `routing TLV-/HUB-EU/FCO` | Any EU hub | TLV-FCO | $290 |
| `direct` | Only direct flights | TLV-LHR | n/a |
| `maxstops 1` | Max 1 stop | TLV-NRT | $180 |
| ... | (30 codes total) | | |

### Page: רשימת Stopover Hubs

**Format:** Database, view: Map (Notion gallery with country flag emoji)

| Hub | Airline | Free hotel? | Tour included? | Best for |
|-----|---------|-------------|----------------|----------|
| Istanbul (IST) | Turkish | Yes (3+ hours) | Yes | Asia, Europe |
| Doha (DOH) | Qatar | Yes (8+ hours) | Yes | Asia, Africa |
| Lisbon (LIS) | TAP | No | Yes | Americas |
| Reykjavik (KEF) | Icelandair | No | No | NY ↔ Europe |
| ... | | | | |

### Page: 50 Error Fares היסטוריות

**Format:** Database, view: Timeline + Filterable

**Properties:** Date, Origin, Destination, Cabin, Mistake price, Normal price, How it was found, Status (honored/cancelled)

**Top 5 highlight cards at top:**
- NYC → Tokyo Business — $450 (normal $4,200) — Jan 2024
- TLV → Bangkok First — $890 (normal $7,800) — Mar 2023
- ... (etc.)

### Page: מטריצת מטבעות + VPN

**Format:** 2-column table + setup video

| Airline | Cheapest country | Currency | VPN needed | Avg savings |
|---------|-----------------|----------|------------|-------------|
| Wizz Air | Hungary | HUF | Yes | 30% |
| Ryanair | Poland | PLN | Yes | 22% |
| Norwegian | Norway | NOK | Yes | 18% |
| Vueling | Spain | EUR | No | 12% |
| LATAM | Argentina | ARS | Yes | 45% |
| ... | | | | |

### Page: רשימת LCC ישראלים

**Format:** Cards (gallery view)

Israir, Arkia, Bluebird Airways, SunDor, Air Haifa
- Routes
- Booking tips
- Avg pricing windows
- Loyalty program quirks

### Page: תבנית חיפוש (Worksheet)

**Format:** Template button — generates a new "Search Session" page each click

**Template content:**
```
## חיפוש: [תאריך] - [יעד]

### Tool 1 — Google Flights (Explore)
מחיר בסיס: $___
3 יעדים זולים שראיתי: ___, ___, ___

### Tool 2 — ITA Matrix
מחיר חבוי: $___
קודים שניסיתי: ___

### Tool 3 — Kiwi Nomad
סידור גיאוגרפי: ___
מחיר: $___

### Tool 4 — Skyscanner Everywhere
LCC חדש שגלית: ___
מחיר: $___

### Tool 5 — Direct booking
אתר: ___
מטבע: ___
מחיר סופי: $___

### החלטה
מסלול נבחר: ___
חיסכון לעומת Skyscanner רגיל: $___
```

---

## 🎁 הבונוסים

### Page: בונוס 1 — Deal Hunter Bot

**Sections:**
1. מה זה? (1 paragraph)
2. איך מצטרפים — Telegram link button
3. איך הבוט עובד (3 bullets)
4. דוגמאות התראות (3 screenshots)
5. תדירות התראות (ממוצע 4-7 ביום)

### Page: בונוס 2 — Error Fares Archive

**Link to database from Tools section. Same content, re-framed as bonus.**

### Page: בונוס 3 — Premium Flights Guide

**Format:** Long-form page, 8 sections
1. למה Premium אפשרי בכסף קטן
2. Mistake Fares — איך זה קורה
3. 5 חברות שעושות Mistake Fares הכי הרבה
4. איך לזהות תוך 60 שניות
5. מה לעשות מיד (התראה, רכישה, אישור)
6. הסיכון: ביטולים
7. 3 דוגמאות אמיתיות
8. כלים + מקורות מעקב

### Page: בונוס 4 — קבוצת וואטסאפ

**Just a link button + group rules**
- Link to WhatsApp invite
- 5 group rules in callout

---

## 💬 הקהילה

### Page: דילים שבועיים

**Format:** Database
**View:** Timeline (newest first)
**Each post:** Title, route, price, link to airline site, screenshot

Updated by you (admin) every Sunday with 5-10 deals from past week.

### Page: שאלות + תשובות

**Format:** Database
**Properties:** Question, Answer, Topic (select), Date, Asked by (text — first name only)
**Views:** "Recent", "By topic"

Builds over time. After 50+ Q&As, becomes searchable knowledge base.

---

## 🔄 עדכונים

### Page: יומן עדכונים

**Format:** Bulleted log, reverse chronological

```
2026-05-20 — Module 12 published
2026-05-15 — Updated ITA Matrix codes (3 deprecated)
2026-05-01 — Launch
```

### Page: שינויים בכלים

**Notion table** — tracks when external tools change behavior (e.g., Skyscanner removes a filter, ITA Matrix updates UI).

| Date | Tool | What changed | Impact on us | Fix |
|------|------|--------------|--------------|-----|
| 2026-04-12 | Skyscanner | Removed "Everywhere" on mobile | Reduces Tool 4 quality on mobile | Use desktop instead |

### Page: תוספות שיטה

When you discover a new method post-launch, add here. Members see "🆕 New module added" notification.

---

## ⚙️ הגדרות חשבון

Boilerplate — email support, account management. 3 short pages.

---

## Setup checklist (for builder)

- [ ] Create Notion workspace "FlyPro Member Hub"
- [ ] Build top-level page tree per structure above
- [ ] Set up 12 modules as database with property schema
- [ ] Embed video placeholders (replace with real Wistia/Vimeo URLs as modules ship)
- [ ] Build PDF assets in Figma, attach to module pages
- [ ] Set workspace permissions: members get "Can view + comment", admin (you) has "Can edit"
- [ ] Configure Notion guest sharing — single template duplication link
- [ ] Set up auto-email via Zapier on purchase: send Notion access link + welcome email
- [ ] Test full flow end-to-end with 1 test member
- [ ] Lock down workspace — no member can see other members' notes

---

## Access flow (post-purchase)

1. Customer pays on flypro.co.il
2. Webhook fires to Zapier
3. Zapier triggers:
   - Email with Notion duplication link
   - Add customer email to Klaviyo "FlyPro Members" list
   - Send WhatsApp group invite link
4. Customer clicks Notion link → duplicates template into their own workspace
5. They get full edit rights on THEIR copy (not the master)

**Master workspace** stays untouched. Updates pushed via "Updates" page in master, members manually copy what they need.

**Alternative (premium): paid Notion teamspace.** Members all collaborate in one space. Costs ~$10/member/month. Worth it once member count > 100.
