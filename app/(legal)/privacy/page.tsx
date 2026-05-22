import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "מדיניות פרטיות — FlyPro",
  description: "כיצד אנחנו אוספים, משתמשים ומגנים על המידע האישי שלך. תואם חוק הגנת הפרטיות, תיקון 13.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "מאי 2026";

export default function PrivacyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">מדיניות פרטיות</h1>
      <p className="text-sm text-slate-400">עודכן לאחרונה: {UPDATED}</p>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">1. כללי</h2>
        <p>
          מדיניות זו מתארת איזה מידע {BUSINESS.name} (״אנחנו״) אוסף ממשתמשי האתר flypro.co.il,
          כיצד אנחנו משתמשים בו ולמי הוא מועבר. המדיניות מנוסחת בהתאם לחוק הגנת הפרטיות,
          התשמ״א-1981 כולל תיקון 13 (אוגוסט 2025).
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">2. מידע שאנחנו אוספים</h2>
        <ul className="mr-6 list-disc space-y-2">
          <li>
            <strong>פרטי הרשמה:</strong> שם, אימייל, טלפון — בעת רישום ל-lead magnet או רכישה.
          </li>
          <li>
            <strong>פרטי תשלום:</strong> מועברים ישירות לסולק החיצוני (PayPlus / Stripe). אנחנו
            לא שומרים פרטי כרטיס אשראי.
          </li>
          <li>
            <strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, דפים שנצפו, זמני
            ביקור — באמצעות עוגיות ופיקסל.
          </li>
          <li>
            <strong>תקשורת:</strong> תוכן הודעות שאתה שולח אלינו (מייל, טלגרם, WhatsApp).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">3. מטרות השימוש במידע</h2>
        <ul className="mr-6 list-disc space-y-2">
          <li>אספקת המוצר והשירות (גישה לקורס, התראות דילים, תמיכה).</li>
          <li>שליחת עדכונים שיווקיים — רק לאחר הסכמה (opt-in).</li>
          <li>שיפור האתר וחוויית המשתמש דרך אנליטיקה.</li>
          <li>מעקב המרות ופרסום ממוקד ב-Meta (Facebook/Instagram).</li>
          <li>עמידה בדרישות חוקיות (הנפקת חשבונית, שמירת רישומים).</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">4. צד שלישי — מי מקבל את המידע</h2>
        <ul className="mr-6 list-disc space-y-2">
          <li>
            <strong>Meta Platforms (Facebook/Instagram):</strong> פיקסל ו-Conversions API
            לצורך מדידת המרות ופרסום ממוקד. אימייל וטלפון מועברים מוצפנים (SHA-256).
          </li>
          <li>
            <strong>Klaviyo:</strong> ניהול רשימות תפוצה והודעות שיווקיות.
          </li>
          <li>
            <strong>Plausible Analytics:</strong> אנליטיקה אנונימית (ללא Cookies).
          </li>
          <li>
            <strong>PayPlus / Stripe:</strong> עיבוד תשלומים.
          </li>
          <li>
            <strong>Vercel:</strong> אחסון האתר.
          </li>
          <li>
            <strong>Telegram / WhatsApp:</strong> משלוח התראות, רק למשתמשים שנרשמו אקטיבית.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">5. עוגיות (Cookies)</h2>
        <p>
          האתר עושה שימוש בעוגיות הכרחיות (להחזקת מצב משתמש) ובעוגיות אנליטיות (Meta Pixel,
          _fbp). ניתן לחסום עוגיות דרך הגדרות הדפדפן. חסימה עלולה לפגוע בחוויית הגלישה.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">6. זכויותיך</h2>
        <ul className="mr-6 list-disc space-y-2">
          <li>
            <strong>זכות עיון:</strong> לבקש לראות איזה מידע מוחזק עליך.
          </li>
          <li>
            <strong>זכות תיקון:</strong> לעדכן או לתקן מידע שגוי.
          </li>
          <li>
            <strong>זכות מחיקה:</strong> לבקש מחיקה מלאה של המידע (כפוף לחובות חוקיות
            כמו שמירת חשבוניות 7 שנים).
          </li>
          <li>
            <strong>הסרה מרשימות תפוצה:</strong> בכל מייל יש קישור הסרה. בטלגרם — /unsubscribe.
          </li>
        </ul>
        <p>
          למימוש זכויות:{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-sky-400">
            {BUSINESS.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">7. אבטחת מידע</h2>
        <p>
          המידע נשמר בשרתים מאובטחים (Vercel, Klaviyo, Upstash) עם הצפנה ב-transit
          (HTTPS/TLS) וב-rest. הגישה למידע מוגבלת לבעלי תפקיד מורשים בלבד. במקרה של דליפת
          מידע נדווח לרשם מאגרי המידע ולמשתמשים שנפגעו, בהתאם לחוק.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">8. שמירת המידע</h2>
        <p>
          מידע על לקוחות נשמר כל עוד הגישה לקורס פעילה + 7 שנים נוספות (חובת שמירת חשבוניות).
          מידע על leads שלא רכשו נמחק לאחר 24 חודשים של חוסר פעילות.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">9. קטינים</h2>
        <p>
          השירות מיועד לבגירים מגיל 18 ומעלה. אם אנחנו מגלים שנאסף מידע על קטין ללא הסכמת
          הורה, נמחק אותו מיידית.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">10. יצירת קשר בנושאי פרטיות</h2>
        <p>
          לכל שאלה או בקשה בנושאי פרטיות:{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-sky-400">
            {BUSINESS.email}
          </a>
          {" "}| טלפון: {BUSINESS.phone}. {BUSINESS.name}, עוסק מורשה {BUSINESS.osek},{" "}
          {BUSINESS.address}.
        </p>
      </section>
    </>
  );
}
