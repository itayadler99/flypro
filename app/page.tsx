import Link from "next/link";

const methods = [
  {
    n: "01",
    title: "השיטה הגיאוגרפית",
    en: "Positioning",
    desc: "תל אביב → אתונה ב-$60. משם טיסה זולה לכל אירופה ב-$30. במקום $410 ישיר — $90 סה״כ.",
  },
  {
    n: "02",
    title: "ירידה באמצע הדרך",
    en: "Hidden City",
    desc: "טיסה ניו יורק→לוס אנג׳לס יקרה? קונים ניו יורק→פיניקס דרך לוס אנג׳לס, יורדים באמצע. חצי מחיר.",
  },
  {
    n: "03",
    title: "תחנות חופש",
    en: "Stopover Hacks",
    desc: "Turkish, TAP, Icelandair, Qatar — חופשה חינם בעיר ביניים. 2 יעדים במחיר 1.",
  },
  {
    n: "04",
    title: "טעויות תמחור",
    en: "Error Fares",
    desc: "טיסות שמתומחרות לא נכון. ניו יורק→טוקיו במחלקה ראשונה ב-$450. איך לזהות ולפעול ב-15 דקות.",
  },
  {
    n: "05",
    title: "ITA Matrix — מתקדם",
    en: "ITA Matrix",
    desc: "המנוע מאחורי Google Flights. קודים מתקדמים שחושפים מחירים שאף אחד לא רואה.",
  },
  {
    n: "06",
    title: "אופטימיזציית רב-יעדים",
    en: "Multi-City",
    desc: "5 ערים ב-3 שבועות. המערכת מסדרת בסדר הזול ביותר. חיסכון של 40-60%.",
  },
  {
    n: "07",
    title: "שילוב מטבעות",
    en: "Currency Arbitrage",
    desc: "אותה טיסה דרך אתר במטבע חלש = 20-40% זול יותר. שילוב VPN ומטבע.",
  },
  {
    n: "08",
    title: "פיענוח מחלקות נסתרות",
    en: "Fare Class Decoding",
    desc: "W, T, K — מחלקות משנה זולות שלא מופיעות בחיפוש רגיל. רק למי שיודע.",
  },
  {
    n: "09",
    title: "סדר 5 הכלים",
    en: "The Stack",
    desc: "הסדר המדויק של 5 כלים שמייצר את המחיר הזול ביותר בכל פעם.",
  },
  {
    n: "10",
    title: "השיטות הישראליות",
    en: "Israel Plays",
    desc: "ימי טיסה זולים מתל אביב, חיבורי חברות תעופה זולות, שיטות שעובדות רק לישראלים.",
  },
];

const modules = [
  { n: 1, title: "הקדמה — איך נדפקנו 20 שנה", time: "8 דק׳", desc: "למה ״טיסות תמיד יקרות״ זה שקר" },
  { n: 2, title: "סדר הכלים הנכון", time: "12 דק׳", desc: "5 כלים, סדר מדויק, החלטה אחת בסוף" },
  { n: 3, title: "השיטה הגיאוגרפית — לעומק", time: "15 דק׳", desc: "תל אביב → תחנת ביניים → יעד סופי" },
  { n: 4, title: "ITA Matrix — קודים מתקדמים", time: "18 דק׳", desc: "המנוע הסודי שסוכני נסיעות משתמשים בו" },
  { n: 5, title: "תחנות חופש", time: "10 דק׳", desc: "Turkish, TAP, Qatar — חופשה כפולה" },
  { n: 6, title: "ירידה באמצע הדרך", time: "8 דק׳", desc: "מתי לעשות, מתי בכלל לא לגעת" },
  { n: 7, title: "טעויות תמחור", time: "12 דק׳", desc: "איך לזהות תוך 60 שניות + לפעול מיד" },
  { n: 8, title: "טריקים לרב-יעדים", time: "10 דק׳", desc: "Kiwi Nomad — לבנות מסלול אופטימלי" },
  { n: 9, title: "שילוב מטבעות + VPN", time: "8 דק׳", desc: "להקטין 30% מהמחיר רק על ידי החלפת מטבע" },
  { n: 10, title: "השיטות הישראליות", time: "15 דק׳", desc: "מה עובד רק מתל אביב, מה לא לגעת" },
  { n: 11, title: "יום ההזמנה", time: "12 דק׳", desc: "מה לעשות בפועל מההתחלה ועד התשלום" },
  { n: 12, title: "5 חיפושים מלאים — לייב", time: "25 דק׳", desc: "ממש מההתחלה ועד הסוף, איתי על המסך" },
];

const faqs = [
  {
    q: "זה עוד קורס מפוצץ עם הבטחות ריקות?",
    a: "לא. אני שונא את זה גם. אין הכשרות. אין ״תורת המנטליות״. רק 12 סרטונים קצרים של הקלטת מסך — אתה רואה את האצבע שלי עוברת על המסך, ועושה בדיוק את אותו דבר. אם תוך 14 יום לא חסכת ₪500 בטיסה אחת — מקבל את כל הכסף בחזרה. אפס שאלות.",
  },
  {
    q: "אני לא טכני. אצליח להבין?",
    a: "כן. כל מודול מצולם עם הקלטת מסך. אתה פשוט עוקב אחרי. אין צורך בידע מוקדם. סבא שלי בן 72 השלים את המערכת ב-3 ימים וטס לקפריסין ב-$110.",
  },
  {
    q: "אני כבר משתמש ב-Skyscanner. למה אני צריך את זה?",
    a: "Skyscanner זה כלי 1 מתוך 5. השיטה היא הסדר והשילוב. רוב האנשים משתמשים ב-Skyscanner בסדר הלא נכון — ומפסידים 40% מהחיסכון. במודול 2 אני מראה את הסדר המדויק.",
  },
  {
    q: "האם זה רלוונטי גם לטיסות שאני כבר חיפשתי?",
    a: "כן. רוב המשתמשים מוצאים את אותה טיסה שחיפשו — ב-50% פחות, תוך 48 שעות מהרכישה.",
  },
  {
    q: "יש החזר אם לא מתאים?",
    a: "כן. 14 יום החזר מלא, בלי שאלות. אם זה לא חוסך לך לפחות ₪500 בטיסה הראשונה — מקבל את כל הכסף בחזרה. שולח הודעה אחת בוואטסאפ ומקבל החזר תוך 48 שעות.",
  },
  {
    q: "האם זה עובד גם לטיסות פנים-ארצות הברית?",
    a: "כן. השיטה גלובלית. רק מודול 10 ספציפי לישראל, השאר עובד לכל הטיסות בעולם.",
  },
  {
    q: "מתי אני מקבל גישה?",
    a: "מיד אחרי התשלום. קישור לכל המוצר נשלח אוטומטית למייל. כולל גישה לקבוצת וואטסאפ פרטית של חברי המערכת.",
  },
  {
    q: "אפשר לשלם ב-Bit?",
    a: "כן. Bit, PayBox, אשראי, חיוב חוזר. ההזמנה מאובטחת בתשתית PayPlus (אישור בנק ישראל).",
  },
  {
    q: "אתה מוציא חשבונית?",
    a: "כן. חשבונית מס ממוחשבת נשלחת אוטומטית לאחר התשלום. כולל מעמ. מתאים לזיכוי כהוצאה עסקית.",
  },
];

const testimonials = [
  {
    name: "דניאל ל׳",
    city: "תל אביב",
    saved: "₪3,400",
    quote: "טסתי לטוקיו עם אשתי בחצי מחיר מההצעה הזולה ביותר שסוכנות נסיעות נתנה לי. לקח לי 20 דקות עם המערכת.",
  },
  {
    name: "שירה ב׳",
    city: "חיפה",
    saved: "₪1,800",
    quote: "ירח דבש בבאלי. כל החברות שלי שילמו ₪8,000 לאדם. אנחנו שילמנו ₪3,600 כל אחד. אותה טיסה. אותו תאריך.",
  },
  {
    name: "אורי מ׳",
    city: "ירושלים",
    saved: "₪2,200",
    quote: "טייל אירופה חודש. 6 ערים. סוכנת אמרה ₪9,500. עשיתי דרך השיטה — ₪3,800.",
  },
  {
    name: "מיכל ר׳",
    city: "רעננה",
    saved: "₪1,500",
    quote: "ניו יורק לכל המשפחה (4 נפשות). חסכתי ₪6,000 על הכרטיסים בלבד. השיטה החזירה את עצמה פי 15 בטיסה אחת.",
  },
  {
    name: "יואב ק׳",
    city: "באר שבע",
    saved: "₪2,800",
    quote: "טסתי לתאילנד שלוש פעמים השנה ב-₪1,200 כל פעם. השכן שלי משלם ₪3,500. ההבדל היחיד? המערכת.",
  },
  {
    name: "אביב ת׳",
    city: "מודיעין",
    saved: "₪900",
    quote: "פעם ראשונה שאני קונה קורס כזה. הייתי חשדן. השאלה שהחזירה אותי: אם זה לא עובד — אקבל החזר. עבד. חסכתי ₪900 ב-3 ימים.",
  },
];

const comparisonRows = [
  { label: "מספר מקורות שנבדקים", flypro: "5 כלים, סדר אופטימלי", skyscanner: "1 כלי בלבד" },
  { label: "טעויות תמחור (Error Fares)", flypro: "מזוהות תוך 60 שניות", skyscanner: "כלל לא מופיעות" },
  { label: "מטבע + VPN", flypro: "כן, חוסך עוד 20-40%", skyscanner: "לא נגיש" },
  { label: "מחלקות נסתרות", flypro: "W, T, K — חשופות", skyscanner: "מציג רק רגיל" },
  { label: "תחנות חופש (Stopover)", flypro: "ממופות לפי חברה + מדינה", skyscanner: "לא ממיין" },
  { label: "חיסכון ממוצע ביעד", flypro: "40-65%", skyscanner: "0-15%" },
];

export default function Home() {
  return (
    <div className="bg-glow min-h-screen">
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/972000000000?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%99%D7%A9%20%D7%9C%D7%99%20%D7%A9%D7%90%D7%9C%D7%94%20%D7%A2%D7%9C%20FlyPro"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-900/40 hover:scale-110 transition-transform"
        aria-label="שלח לנו וואטסאפ"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0a0f]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center font-black text-[#0a0a0f]">
              F
            </div>
            <span className="text-lg font-bold">FlyPro</span>
          </div>
          <Link
            href="#pricing"
            className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-full text-white"
          >
            התחל עכשיו
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-5 pt-20 pb-24 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-300 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          לישראלים שמטיילים בלי לבזבז
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          <span className="text-gradient">השיטה</span>
          <br />
          <span className="text-white">למצוא טיסות בחצי מחיר</span>
        </h1>

        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          לא מזל. לא בלוגרית. לא טיפים מהאינטרנט.
          <br />
          <span className="text-white font-medium">
            מערכת מקצועית שסוכני נסיעות משתמשים בה כל יום.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Link
            href="#pricing"
            className="btn-primary px-8 py-4 rounded-full font-bold text-white text-lg"
          >
            קבל גישה — ₪397
          </Link>
          <Link
            href="#methods"
            className="text-zinc-300 hover:text-white transition-colors text-base"
          >
            ראה את 10 השיטות ↓
          </Link>
        </div>
        <p className="text-sm text-zinc-500 mb-12">
          או 3 תשלומים של ₪139 · החזר מלא ב-14 יום · כולל מעמ
        </p>

        {/* Hero proof strip */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/5">
          <div>
            <div className="text-3xl md:text-4xl font-black text-gradient">$87</div>
            <div className="text-sm text-zinc-500 mt-1">תל אביב → רומא</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-gradient">$140</div>
            <div className="text-sm text-zinc-500 mt-1">תל אביב → לונדון</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-gradient">$320</div>
            <div className="text-sm text-zinc-500 mt-1">תל אביב → ניו יורק</div>
          </div>
        </div>
        <p className="text-xs text-zinc-600 mt-4">מחירים אמיתיים. הלוך חזור. סוף השבוע האחרון.</p>
      </section>

      {/* Social proof strip */}
      <section className="px-5 py-8 max-w-6xl mx-auto">
        <div className="card rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-gradient">+147</div>
              <div className="text-xs text-zinc-500 mt-1">ישראלים במערכת</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-gradient">₪2.1M</div>
              <div className="text-xs text-zinc-500 mt-1">חיסכון מצטבר</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-gradient">₪1,840</div>
              <div className="text-xs text-zinc-500 mt-1">חיסכון ממוצע לטיסה</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-gradient">4.9★</div>
              <div className="text-xs text-zinc-500 mt-1">דירוג ממוצע</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-5 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            הבעיה
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            אתה משלם פי 3
            <br />
            <span className="text-zinc-500">בלי לדעת</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
          <p>
            ראית פעם פוסט של מישהו שטס לאירופה ב-$80?
            ניסית לחפש את אותה טיסה — ויצא לך $410.
          </p>
          <p>
            זה לא במקרה. זה לא ״עונה לא נכונה״. זה לא ״הוא מצא דיל מיוחד״.
          </p>
          <p className="text-white font-medium text-2xl">
            הוא יודע שיטה. אתה לא.
          </p>
          <p>
            סוכני נסיעות יודעים אותה. בלוגרים יודעים אותה. אפילו חברות הטיסה עצמן יודעות אותה.
            אבל אתה — משלם מחיר מלא בכל פעם שאתה טס.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="px-5 py-24 max-w-4xl mx-auto">
        <div className="card rounded-3xl p-8 md:p-14">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            איך השיטה נולדה
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
            3 שנים. 400+ טיסות. רק כדי לפצח את זה.
          </h2>
          <div className="space-y-5 text-lg text-zinc-300 leading-relaxed">
            <p>
              התחיל מתסכול. ראינו אנשים טסים לאותם יעדים שלנו — בחצי מחיר.
              לא בלוגרים. לא משפיענים. אנשים רגילים שיודעים משהו שאנחנו לא ידענו.
            </p>
            <p>
              גייסתי צוות של 4 אנליסטים — שניים מהם עבדו בעבר ב-Skyscanner וב-ITA Software.
              ביקשנו תשובה אחת: <span className="text-white font-medium">איך טיסה אחת ב-3 מסלולים שונים עולה $87, $190, ו-$850?</span>
            </p>
            <p>
              התשובה הייתה לא ״עונה״, לא ״מזל״, לא ״חברת תעופה זולה״.
            </p>
            <p className="text-white font-bold text-xl">
              התשובה: יש 5 כלים. יש סדר. רוב האנשים משתמשים בכלי 1 בסדר הלא נכון. זהו.
            </p>
            <p>
              לקח עוד שנתיים לסדר את זה לשיטה שכל אחד יכול ליישם תוך 15 דקות.
              היום זה <span className="text-sky-300 font-semibold">FlyPro</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Belief Shift */}
      <section className="px-5 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            מה שאתה חושב — לא נכון
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            ״טיסות הפכו ליקרות״.
            <br />
            <span className="text-zinc-500">לא נכון. בכלל.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              myth: "טיסות יקרות בגלל המצב",
              truth: "התעריפים הגלובליים ירדו 18% מ-2024. הישראלים פשוט מחפשים בכלי הלא נכון.",
            },
            {
              myth: "צריך להזמין 6 חודשים מראש",
              truth: "57% מהדילים הטובים ביותר נסגרים 3-7 שבועות לפני הטיסה. שיטה עדיפה על תכנון מוקדם.",
            },
            {
              myth: "Skyscanner ו-Google Flights מראים הכל",
              truth: "הם מראים 12% מהטיסות הזמינות. 88% מהדילים הטובים חבויים מאחורי קודים, מטבעות, וחברות תעופה זולות שלא מאונדקסות.",
            },
            {
              myth: "נקודות אשראי = החיסכון האמיתי",
              truth: "נקודות חוסכות 8-15%. השיטה הזו חוסכת 40-65%. הן משלימות — לא מחליפות.",
            },
          ].map((item) => (
            <div key={item.myth} className="card rounded-2xl p-6">
              <div className="text-sm text-red-400 font-semibold mb-2">❌ מה שאומרים</div>
              <p className="text-zinc-400 mb-4">{item.myth}</p>
              <div className="text-sm text-sky-400 font-semibold mb-2">✓ האמת</div>
              <p className="text-white">{item.truth}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison vs Skyscanner */}
      <section className="px-5 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            ההבדל
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            FlyPro מול מה שאתה
            <br />
            <span className="text-zinc-500">משתמש בו עכשיו</span>
          </h2>
        </div>

        <div className="card rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-sky-500/5 border-b border-white/5">
            <div className="p-4 text-sm text-zinc-400 font-semibold">פיצ׳ר</div>
            <div className="p-4 text-center font-bold text-sky-300">FlyPro</div>
            <div className="p-4 text-center font-bold text-zinc-400">Skyscanner / Google</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
            >
              <div className="p-4 text-sm text-zinc-300">{row.label}</div>
              <div className="p-4 text-center text-sm text-white font-medium">{row.flypro}</div>
              <div className="p-4 text-center text-sm text-zinc-500">{row.skyscanner}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 10 Methods */}
      <section id="methods" className="px-5 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            הפתרון
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            10 שיטות.
            <br />
            <span className="text-gradient">שיטה אחת מספיקה</span>
            <span> כדי שתחזיר את ההשקעה.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            כל אחת מהשיטות חוסכת לבדה מאות עד אלפי שקלים. ביחד — אתה לא משלם מחיר מלא שוב.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {methods.map((m) => (
            <div key={m.n} className="card card-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-black text-sky-400 shrink-0">{m.n}</div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{m.title}</h3>
                    <span className="text-xs text-zinc-600">{m.en}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-5 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            מה כלול
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            12 מודולים. שעתיים וחצי.
            <br />
            <span className="text-zinc-500">שיטה לכל החיים.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {modules.map((m) => (
            <div
              key={m.n}
              className="card rounded-xl p-5 flex items-center gap-5 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/10 border border-sky-500/30 flex items-center justify-center font-bold text-sky-300 shrink-0">
                {m.n}
              </div>
              <div className="flex-1">
                <div className="font-bold text-white">{m.title}</div>
                <div className="text-sm text-zinc-500">{m.desc}</div>
              </div>
              <div className="text-sm text-zinc-500 shrink-0">{m.time}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 card rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-5">+ ארגז כלים פרטי (Notion)</h3>
          <ul className="space-y-3 text-zinc-300">
            {[
              "צ׳קליסט ״10 טעויות שעולות ₪3,000״",
              "מאגר קודים ל-ITA Matrix",
              "רשימת תחנות חופש + הטבות חברות",
              "50 דוגמאות אמיתיות של טעויות תמחור",
              "כלים + לינקים + אתרים מומלצים",
              "עדכונים לכל החיים — בלי תשלום נוסף",
              "קבוצת וואטסאפ פרטית של חברי המערכת",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-sky-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            מה אומרים החברים
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            ישראלים. אמיתיים.
            <br />
            <span className="text-gradient">חוסכים אלפי שקלים.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="card rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.city}</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-gradient">{t.saved}</div>
                  <div className="text-xs text-zinc-500">חיסכון</div>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm flex-1">״{t.quote}״</p>
              <div className="flex gap-1 mt-4 text-sky-400 text-sm">★★★★★</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-600 mt-8">
          ביקורות מאומתות. שמות מלאים שמורים במערכת.
        </p>
      </section>

      {/* Bonuses */}
      <section className="px-5 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            הבונוסים — כלולים בקנייה
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            4 בונוסים בשווי <span className="text-gradient">₪1,290</span>
          </h2>
          <p className="text-lg text-zinc-400">בלי תוספת תשלום. נשלחים מיד אחרי הרכישה.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              tag: "בונוס 1",
              value: "₪349",
              title: "בוט הדילים הפרטי",
              desc: "התראה בטלגרם כל פעם שיש טעות תמחור או דיל מטורף מתל אביב. בזמן אמת. 24/7. דוגמאות אחרונות: ת״א-טוקיו ב-$315, ת״א-ניו יורק ב-$225.",
            },
            {
              tag: "בונוס 2",
              value: "₪299",
              title: "מאגר 50 טעויות תמחור",
              desc: "50 דילים שעלו בשנתיים האחרונות. כל אחד מנותח: מה היה הקוד, איך זוהו, איך לזהות את הבא. דוגמאות: ת״א-בנגקוק $245, ת״א-מקסיקו $380.",
            },
            {
              tag: "בונוס 3",
              value: "₪399",
              title: "מדריך טיסות פרימיום בכסף קטן",
              desc: "מחלקה ראשונה מ-$440 במקום $4,100. השיטה לטעויות תמחור של המחלקות העליונות. כולל רשימת חברות שעושות את זה הכי הרבה.",
            },
            {
              tag: "בונוס 4",
              value: "₪243",
              title: "קבוצת וואטסאפ פרטית",
              desc: "רק חברי המערכת. דילים שמתחלקים בזמן אמת. שאלות ספציפיות → תשובות מהצוות תוך שעות.",
            },
          ].map((b) => (
            <div key={b.tag} className="card card-hover rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-sky-300 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full">
                  {b.tag}
                </span>
                <span className="text-sm text-zinc-500">
                  שווי <span className="line-through">{b.value}</span>
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 card rounded-2xl p-6 text-center">
          <p className="text-zinc-400 mb-1">סך הכל שווי המערכת + בונוסים:</p>
          <div className="text-3xl md:text-4xl font-black">
            <span className="line-through text-zinc-500">₪2,087</span>
            <span className="mx-3 text-zinc-600">→</span>
            <span className="text-gradient">₪397</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-5 py-24 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            המחיר
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            פחות ממה
            <br />
            שתחסוך בטיסה אחת.
          </h2>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            המחיר עולה ל-₪597 ב-1 ביוני
          </div>
        </div>

        <div className="card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-3xl font-black">FlyPro — המערכת המלאה</h3>
              <span className="text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/30 px-3 py-1.5 rounded-full">
                גישה לכל החיים
              </span>
            </div>
            <p className="text-zinc-400 mb-8">
              12 מודולים + ארגז כלים פרטי + 4 בונוסים + קבוצת וואטסאפ
            </p>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-2xl text-zinc-500 line-through">₪797</span>
              <span className="text-6xl md:text-7xl font-black text-gradient">₪397</span>
            </div>
            <p className="text-sm text-zinc-500 mb-2">תשלום חד-פעמי. בלי מנוי. בלי הפתעות.</p>
            <p className="text-sm text-zinc-500 mb-8">כולל מעמ · חשבונית מס נשלחת אוטומטית.</p>

            <Link
              href="/checkout"
              className="btn-primary block text-center w-full py-5 rounded-2xl font-bold text-white text-lg mb-4"
            >
              קנה את המערכת עכשיו
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                תשלום מאובטח (PayPlus)
              </span>
              <span>·</span>
              <span>Bit · PayBox · אשראי</span>
              <span>·</span>
              <span>14 יום החזר מלא</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-5 py-16 max-w-3xl mx-auto">
        <div className="card rounded-3xl p-8 md:p-12 text-center">
          <div className="inline-flex w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/30 items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-sky-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            לא חסכת ₪500 בטיסה הראשונה?
            <br />
            <span className="text-gradient">כסף בחזרה. נקודה.</span>
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            14 יום מהרכישה. שולח לנו הודעה אחת בוואטסאפ. מקבל החזר מלא תוך 48 שעות בלי שאלות.
            הסיכון על המערכת — לא עליך.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            שאלות נפוצות
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            כל מה שאתה חושב.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="card rounded-xl p-5 group cursor-pointer"
            >
              <summary className="flex items-center justify-between font-bold text-lg list-none">
                <span>{f.q}</span>
                <span className="text-sky-400 text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-zinc-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
          הטיסה הבאה שלך
          <br />
          <span className="text-gradient">תעלה לך חצי.</span>
        </h2>
        <p className="text-lg text-zinc-400 mb-10">
          ₪397 פעם אחת. גישה לכל החיים. החזר מלא אם לא עובד.
        </p>
        <Link
          href="#pricing"
          className="btn-primary inline-block px-10 py-5 rounded-full font-bold text-white text-lg"
        >
          התחל עכשיו ←
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-5 py-12 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center font-black text-[#0a0a0f] text-sm">
                  F
                </div>
                <span className="font-bold">FlyPro</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                המערכת שמלמדת ישראלים איך לטוס לכל מקום בעולם בחצי מחיר.
                בלי טריקים. בלי מזל. רק שיטה.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">המוצר</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#methods" className="hover:text-white">10 השיטות</a></li>
                <li><a href="#pricing" className="hover:text-white">המחיר</a></li>
                <li><a href="#faq" className="hover:text-white">שאלות נפוצות</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">חוקי</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/terms" className="hover:text-white">תקנון</Link></li>
                <li><Link href="/privacy" className="hover:text-white">מדיניות פרטיות</Link></li>
                <li><Link href="/accessibility" className="hover:text-white">הצהרת נגישות</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span>© {new Date().getFullYear()} FlyPro</span>
              <span className="hidden md:inline">·</span>
              <span>ע״מ 000000000</span>
              <span className="hidden md:inline">·</span>
              <a href="mailto:hello@flypro.co.il" className="hover:text-white">hello@flypro.co.il</a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/972000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                וואטסאפ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
