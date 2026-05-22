import type { Metadata } from "next";
import { ACCESSIBILITY, BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "הצהרת נגישות — FlyPro",
  description: "הצהרת הנגישות של אתר FlyPro לפי תקנות שוויון זכויות לאנשים עם מוגבלות ות״י 5568.",
  alternates: { canonical: "/accessibility" },
};

const UPDATED = "מאי 2026";

export default function AccessibilityPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">הצהרת נגישות</h1>
      <p className="text-sm text-slate-400">עודכן לאחרונה: {UPDATED}</p>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">המחויבות שלנו</h2>
        <p>
          {BUSINESS.name} מחויב לאפשר שימוש באתר לכל אדם, לרבות אנשים עם מוגבלויות. הנגשת
          האתר בוצעה בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
          התשע״ג-2013, ולתקן הישראלי ת״י 5568 ברמה AA (תואם WCAG 2.0 רמה AA).
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">רמת ההנגשה</h2>
        <ul className="mr-6 list-disc space-y-2">
          <li>האתר תומך בניווט מקלדת מלא (Tab / Shift+Tab / Enter / Space).</li>
          <li>ניגודיות צבעים תואמת WCAG AA לטקסט (לפחות 4.5:1).</li>
          <li>כל התמונות המרכזיות כוללות טקסט חלופי (alt).</li>
          <li>מבנה כותרות סמנטי (h1 → h6) מסודר היררכית.</li>
          <li>תמיכה בקוראי מסך (NVDA, JAWS, VoiceOver) דרך תיוג ARIA נכון.</li>
          <li>גופן בגודל בסיסי 16px ומעלה, ניתן להגדלה עד 200% ללא אובדן תוכן.</li>
          <li>טפסים כוללים תוויות ברורות והודעות שגיאה נגישות.</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">חלקים שטרם הונגשו במלואם</h2>
        <ul className="mr-6 list-disc space-y-2">
          <li>סרטוני וידאו של הקורס — תהליך הוספת כתוביות בעברית בעיצומו.</li>
          <li>PDF של ה-lead magnet — נגיש ב-HTML חלופי שמסופק לפי בקשה.</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">תאריך בדיקה</h2>
        <p>
          האתר עבר בדיקת נגישות אחרונה בתאריך {UPDATED}. הבדיקה הבאה תיערך תוך שנה ובהתאם
          לעדכונים מהותיים באתר.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">פנייה לרכז נגישות</h2>
        <p>
          נתקלת בבעיה? יש לך הצעה לשיפור? צור קשר עם רכז הנגישות שלנו ונחזור אליך תוך 14 ימי
          עסקים, בהתאם לתקנות.
        </p>
        <ul className="mr-6 list-disc space-y-1">
          <li>שם: {ACCESSIBILITY.contactName}</li>
          <li>
            מייל:{" "}
            <a href={`mailto:${ACCESSIBILITY.contactEmail}`} className="text-sky-400">
              {ACCESSIBILITY.contactEmail}
            </a>
          </li>
          <li>טלפון: {ACCESSIBILITY.contactPhone}</li>
        </ul>
      </section>
    </>
  );
}
