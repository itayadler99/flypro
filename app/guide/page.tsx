import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "המדריך — 5 דילים שחסכו ₪3,000",
  description: "המדריך החינמי של FlyPro — 5 דילים אמיתיים והשיטה שמאחוריהם.",
  robots: { index: false, follow: false },
};

const SECTIONS: { title: string; subtitle?: string; body: React.ReactNode }[] = [
  {
    title: "מבוא: למה רוב הישראלים משלמים פי 2-4 על אותה טיסה",
    body: (
      <p>
        ב-Skyscanner וב-Google Flights יש מנגנון נסתר שמציג לישראלים מחירים גבוהים יותר. זה
        לא קונספירציה — זה דינמיק פרייסינג. הסיבה: ישראלים מחפשים פחות, מזמינים מהר יותר,
        ומוכנים לשלם יותר. 5 הדילים הבאים מראים בדיוק איך עוקפים את המנגנון.
      </p>
    ),
  },
  {
    title: "דיל 1 — תל אביב → רומא · $87 (במקום $310)",
    subtitle: "Wizz Air · 14–18 בפברואר 2026",
    body: (
      <>
        <p>
          <strong>השיטה:</strong> Hidden City Ticketing. במקום TLV→FCO ישיר, חיפשנו TLV→BUD
          עם עצירה ברומא. עצרנו ברומא, המשכנו מבודפשט — ביטלנו את הלג השני.
        </p>
        <p className="text-sm text-amber-300">
          ⚠ עובד רק על one-way. נגד מדיניות חברות התעופה. בלי תיק ביד.
        </p>
      </>
    ),
  },
  {
    title: "דיל 2 — תל אביב → ניו יורק · $320 (במקום $890)",
    subtitle: "Norse Atlantic + ITA Airways · 8–22 במרץ 2026",
    body: (
      <p>
        <strong>השיטה:</strong> Split Ticketing. 2 כרטיסים נפרדים — TLV→ATH ($60) + ATH→JFK
        ($260). לא מופיע באף מנוע השוואה רגיל. השאירו 6+ שעות בין הטיסות לבטחון.
      </p>
    ),
  },
  {
    title: "דיל 3 — תל אביב → טוקיו · $315 (במקום $1,100)",
    subtitle: "Air China · Error Fare ינואר 2026",
    body: (
      <p>
        <strong>השיטה:</strong> Error Fare. חברה פרסמה בטעות 80% הנחה. הזמנו תוך 47 דקות.
        החברה כיבדה אחרי משא ומתן. הצטרפו לבוט הטלגרם שלנו לקבלת התראות בזמן אמת.
      </p>
    ),
  },
  {
    title: "דיל 4 — תל אביב → מקסיקו · $380 (במקום $1,400)",
    subtitle: "Aeromexico + LOT · אפריל 2026",
    body: (
      <p>
        <strong>השיטה:</strong> Currency Arbitrage. אותה טיסה, אותו מקום, מחיר שונה לפי
        מטבע הקנייה. PLN היה זול ב-62% מ-ILS. כלים נדרשים: VPN + כרטיס אשראי ללא עמלות
        המרה.
      </p>
    ),
  },
  {
    title: "דיל 5 — תל אביב → בנגקוק (First Class) · $440 (במקום $4,800)",
    subtitle: "Etihad · מאי 2026",
    body: (
      <p>
        <strong>השיטה:</strong> B2B Promo Codes. קודי הנחה למפעילי תיירות שלא נחסמים
        ללקוחות פרטיים. בדקנו 12 קודים, אחד תפס. הקורס המלא מסביר את 4 המאגרים שמרכזים את
        הקודים.
      </p>
    ),
  },
  {
    title: "הטעות שכמעט כולם עושים",
    body: (
      <>
        <p>
          חיפוש בדפדפן רגיל. Google Flights יודע מי אתה, מאיפה אתה, מה חיפשת. המחיר עולה
          ב-15-30% רק בגלל זה.
        </p>
        <p>
          <strong>הפתרון:</strong> Incognito + VPN לכל חיפוש. אם המחיר ירד ב-Incognito — קח
          אותו עכשיו, לא יחזור.
        </p>
      </>
    ),
  },
];

export default function GuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-right">
      <Link href="/" className="mb-8 inline-block text-sm text-sky-400 hover:text-sky-300">
        → חזרה לעמוד הראשי
      </Link>

      <p className="text-sm uppercase tracking-widest text-emerald-400">מדריך FlyPro</p>
      <h1 className="mt-3 text-4xl font-bold text-white">
        5 דילים שחסכו ₪3,000 — והשיטה שמאחוריהם
      </h1>
      <p className="mt-4 text-slate-400">
        טיפ: לחיצה על Ctrl+P (או Cmd+P במק) ובחירת &quot;Save as PDF&quot; שומרת את המדריך
        אצלך.
      </p>

      <div className="mt-10 space-y-10">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="text-2xl font-bold text-white">{s.title}</h2>
            {s.subtitle && (
              <p className="mt-1 text-sm text-slate-400">{s.subtitle}</p>
            )}
            <div className="mt-3 space-y-2 text-slate-200">{s.body}</div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-sky-700 bg-sky-950/30 p-8 text-center">
        <h3 className="text-2xl font-bold text-white">
          הדילים האלה הם דוגמה. הקורס המלא מלמד 12 שיטות
        </h3>
        <p className="mt-3 text-slate-300">
          12 מודולים, ארגז כלים ב-Notion, בוט התראות 24/7, וקהילת ישראלים — ₪397 חד-פעמי.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
        >
          לפרטי הקורס ←
        </Link>
      </div>
    </main>
  );
}
