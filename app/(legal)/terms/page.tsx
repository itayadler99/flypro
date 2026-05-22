import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "תקנון שימוש — FlyPro",
  description: "תקנון השימוש בקורס FlyPro וברשימות הדילים. כפוף לדין הישראלי.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "מאי 2026";

export default function TermsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">תקנון שימוש</h1>
      <p className="text-sm text-slate-400">עודכן לאחרונה: {UPDATED}</p>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">1. הגדרות</h2>
        <p>
          ״האתר״ — flypro.co.il ושירותי המותג {BUSINESS.name}. ״המוצר״ — קורס דיגיטלי הכולל
          שיעורי וידאו, ארגז כלים ב-Notion, גישה לבוט התראות דילים ועדכונים שוטפים. ״המשתמש״ —
          כל אדם הנכנס לאתר או רוכש את המוצר.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">2. בעל האתר</h2>
        <p>
          {BUSINESS.name}, עוסק מורשה מס׳ {BUSINESS.osek}. כתובת: {BUSINESS.address}. מייל:
          {" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-sky-400">
            {BUSINESS.email}
          </a>
          . טלפון: {BUSINESS.phone}.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">3. תיאור המוצר</h2>
        <p>
          FlyPro הוא קורס וידאו הכולל 12 מודולים, ארגז כלים פרטי ב-Notion, גישה לבוט טלגרם
          שמשגר התראות על דילי טיסה זולים, וקבוצת WhatsApp לחברי הקורס. הגישה למוצר אישית
          ולא ניתנת להעברה. תוקף הגישה: 12 חודשים מיום הרכישה (ניתן לחידוש).
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">4. מחיר ותשלום</h2>
        <p>
          המחיר המוצג באתר כולל מע״מ כחוק. תשלום מתבצע באמצעות סולק חיצוני (PayPlus) או
          העברה בנקאית. חשבונית מס נשלחת אוטומטית למייל בתום העסקה. אפשרות פריסה ל-3 תשלומים
          ללא ריבית.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">5. מדיניות ביטול והחזר</h2>
        <p>
          בהתאם לחוק הגנת הצרכן תשמ״א-1981 ולתקנות הגנת הצרכן (ביטול עסקה) תשע״א-2010:
        </p>
        <ul className="mr-6 list-disc space-y-2">
          <li>
            ניתן לבטל את העסקה תוך 14 ימים מיום ביצועה, בכפוף לכך שלא נצרך יותר מ-15% מתכני
            הקורס (וידאו או חומרי לימוד).
          </li>
          <li>
            לאחר צפייה משמעותית בתכנים זכות הביטול פוקעת, מאחר שמדובר במידע ניתן להעתקה
            (תקנה 6(8) לתקנות ביטול עסקה).
          </li>
          <li>
            דמי ביטול: 5% מסכום העסקה או 100 ש״ח — הנמוך מביניהם.
          </li>
          <li>
            ההחזר יבוצע תוך 14 ימים מהאישור, לאמצעי התשלום המקורי בלבד.
          </li>
          <li>
            <strong>אחריות תוצאה:</strong> אם השלמת את המודולים 1–6 ולא חסכת לפחות ₪500
            בטיסה הראשונה — תוכל לקבל החזר מלא לפי שיקול דעתנו, גם אם עברו 14 הימים.
          </li>
        </ul>
        <p>
          פנייה לביטול:
          {" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-sky-400">
            {BUSINESS.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">6. רישיון שימוש וקניין רוחני</h2>
        <p>
          הקורס, הסרטונים, חומרי הלימוד, השיטות, הנוסחאות והגישה ל-Notion — בבעלות בלעדית של
          {" "}{BUSINESS.name}. ניתנת למשתמש זכות שימוש אישית, לא בלעדית ולא ניתנת להעברה.
          אסור להעתיק, לשתף, להעלות לרשתות, לפרסם, למכור או להפיץ את התכנים, באופן מלא או
          חלקי. הפרה תוביל לחסימת הגישה ולתביעת פיצוי לפי חוק זכויות יוצרים, התשס״ח-2007.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">7. הגבלת אחריות</h2>
        <p>
          התכנים מבוססים על ניסיון אישי, מחקר ושיטות שעבדו בעבר. מחירי טיסות משתנים בזמן
          אמת ואין באמור הבטחה לתוצאה ספציפית. ההחלטה על רכישת כרטיס טיסה היא של המשתמש בלבד.
          {BUSINESS.name} אינו אחראי לנזקים עקיפים, אובדן רווחים או הוצאות שנגרמו עקב שינויי
          מחירים, ביטולי טיסות מצד חברות תעופה או החלטות צרכניות של המשתמש.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">8. שינויים בתנאים</h2>
        <p>
          {BUSINESS.name} רשאי לעדכן את תנאי השימוש מעת לעת. שינויים מהותיים ייכנסו לתוקף 14
          ימים לאחר פרסומם בעמוד זה. המשך השימוש לאחר העדכון מהווה הסכמה לתנאים המעודכנים.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">9. דין וסמכות שיפוט</h2>
        <p>
          על תקנון זה יחול הדין הישראלי בלבד. סמכות השיפוט הייחודית נתונה לבתי המשפט במחוז
          תל אביב.
        </p>
      </section>

      <section>
        <h2 className="mt-8 text-xl font-semibold text-white">10. יצירת קשר</h2>
        <p>
          לכל שאלה, תלונה או הבהרה ניתן לפנות:{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-sky-400">
            {BUSINESS.email}
          </a>
          {" "}| טלפון: {BUSINESS.phone}.
        </p>
      </section>
    </>
  );
}
