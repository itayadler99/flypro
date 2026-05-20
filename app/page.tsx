import Link from "next/link";

const methods = [
  {
    n: "01",
    title: "Positioning Play",
    desc: "TLV → אתונה ב-$60. משם LCC לכל אירופה ב-$30. במקום $400 ישיר — $90 סה״כ.",
  },
  {
    n: "02",
    title: "Hidden City Ticketing",
    desc: "טיסה NYC→LAX יקרה? קונים NYC→Phoenix דרך LAX, יורדים באמצע. חצי מחיר.",
  },
  {
    n: "03",
    title: "Stopover Hacks",
    desc: "Turkish, TAP, Icelandair, Qatar — חופשה חינם בעיר ביניים. 2 יעדים במחיר 1.",
  },
  {
    n: "04",
    title: "Error Fares",
    desc: "טיסות שמתומחרות לא נכון. NYC→Tokyo Business ב-$450. איך לזהות ולפעול ב-15 דקות.",
  },
  {
    n: "05",
    title: "ITA Matrix Advanced",
    desc: "המנוע מאחורי Google Flights. קודים מתקדמים שחושפים מחירים שאף אחד לא רואה.",
  },
  {
    n: "06",
    title: "Multi-City Optimization",
    desc: "5 ערים ב-3 שבועות. המערכת מסדרת בסדר הזול ביותר. חיסכון של 40-60%.",
  },
  {
    n: "07",
    title: "Currency Arbitrage",
    desc: "אותה טיסה דרך אתר במטבע חלש = 20-40% זול יותר. שילוב VPN ומטבע.",
  },
  {
    n: "08",
    title: "Fare Class Decoding",
    desc: "W/T/K — sub-classes זולים שלא מופיעים בחיפוש רגיל. רק לאלה שיודעים.",
  },
  {
    n: "09",
    title: "The Stack Method",
    desc: "הסדר המדויק של 5 כלים שמייצר את המחיר הזול ביותר בכל פעם.",
  },
  {
    n: "10",
    title: "Israel-Specific Plays",
    desc: "ימי טיסה זולים מ-TLV, חיבורי LCC, שיטות שעובדות רק לישראלים.",
  },
];

const modules = [
  { n: 1, title: "The Mindset", time: "8 דק׳", desc: "למה ״טיסות תמיד יקרות״ זה שקר" },
  { n: 2, title: "The Stack", time: "12 דק׳", desc: "סדר החיפוש הנכון" },
  { n: 3, title: "Positioning Play", time: "15 דק׳", desc: "TLV → hub → destination" },
  { n: 4, title: "ITA Matrix", time: "18 דק׳", desc: "המנוע הסודי, קודים מתקדמים" },
  { n: 5, title: "Stopovers", time: "10 דק׳", desc: "Turkish, TAP, Qatar — חופשה כפולה" },
  { n: 6, title: "Hidden City", time: "8 דק׳", desc: "מתי לעשות ומתי לא" },
  { n: 7, title: "Error Fares", time: "12 דק׳", desc: "זיהוי + פעולה מיידית" },
  { n: 8, title: "Multi-City Hacks", time: "10 דק׳", desc: "Kiwi Nomad, סידור אופטימלי" },
  { n: 9, title: "Currency + VPN", time: "8 דק׳", desc: "טריקים של מטבע" },
  { n: 10, title: "Israel Plays", time: "15 דק׳", desc: "TLV ספציפי + LCC" },
  { n: 11, title: "Booking Day", time: "12 דק׳", desc: "מה לעשות בפועל מתחילתו לסופו" },
  { n: 12, title: "5 חיפושים מלאים", time: "25 דק׳", desc: "דוגמאות אמיתיות מההתחלה ועד הסוף" },
];

const faqs = [
  {
    q: "אני לא טכני. אצליח להבין?",
    a: "כן. כל מודול מצולם עם הקלטת מסך. אתה פשוט עוקב אחרי מה שאני עושה. אין צורך בידע מוקדם.",
  },
  {
    q: "אני כבר משתמש ב-Skyscanner. למה אני צריך את זה?",
    a: "Skyscanner זה כלי 1 מתוך 5. השיטה היא הסדר והשילוב. רוב האנשים משתמשים ב-Skyscanner לא נכון — ומפסידים 40% מהחיסכון.",
  },
  {
    q: "האם זה רלוונטי גם לטיסות שאני כבר חיפשתי?",
    a: "כן. רוב המשתמשים מוצאים את הטיסה הראשונה שלהם ב-50% פחות תוך 48 שעות מהרכישה.",
  },
  {
    q: "יש החזר אם לא מתאים?",
    a: "כן. 14 יום החזר מלא, בלי שאלות. אם זה לא חוסך לך לפחות ₪500 בטיסה הראשונה — מקבל את כל הכסף בחזרה.",
  },
  {
    q: "האם זה עובד גם לטיסות פנים-ארה״ב?",
    a: "כן. השיטה גלובלית. המודול ה-10 הוא ספציפי לישראל, השאר עובד לכל הטיסות בעולם.",
  },
  {
    q: "מתי אני מקבל גישה?",
    a: "מיד אחרי התשלום. קישור לכל המוצר נשלח אוטומטית. כולל גישה לקבוצת וואטסאפ פרטית.",
  },
];

export default function Home() {
  return (
    <div className="bg-glow min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/70 border-b border-white/5">
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
            קנה את המערכת — ₪397
          </Link>
          <Link
            href="#methods"
            className="text-zinc-300 hover:text-white transition-colors text-base"
          >
            ראה את 10 השיטות ↓
          </Link>
        </div>
        <p className="text-sm text-zinc-500 mb-12">
          או 3 תשלומים של ₪139 · החזר מלא ב-14 יום
        </p>

        {/* Hero proof strip */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/5">
          <div>
            <div className="text-3xl md:text-4xl font-black text-gradient">$87</div>
            <div className="text-sm text-zinc-500 mt-1">TLV → רומא</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-gradient">$140</div>
            <div className="text-sm text-zinc-500 mt-1">TLV → לונדון</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-gradient">$320</div>
            <div className="text-sm text-zinc-500 mt-1">TLV → ניו יורק</div>
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
            ניסית לחפש את אותה טיסה — ויצא לך $420.
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

      {/* Origin / Method Discovery */}
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
              בנינו צוות. שכרנו אנליסטים בעבר עבדו ב-Skyscanner ו-ITA.
              ביקשנו תשובה אחת: <span className="text-white font-medium">איך טיסה אחת ב-3 מסלולים שונים עולה $87, $190, ו-$840?</span>
            </p>
            <p>
              התשובה הייתה לא ״עונה״, לא ״מזל״, לא ״חברת תעופה זולה״.
            </p>
            <p className="text-white font-bold text-xl">
              התשובה הייתה: יש 5 כלים. יש סדר. רוב האנשים משתמשים בכלי 1 בסדר הלא נכון. זהו.
            </p>
            <p>
              לקח עוד שנתיים לסדר את זה לשיטה שכל אחד יכול ליישם תוך 15 דקות.
              היום זה <span className="text-sky-300 font-semibold">FlyPro</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Belief Shift / Objection Killer */}
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
              myth: "טיסות יקרות מאז המלחמה",
              truth: "התעריפים הגלובליים ירדו 18% מ-2024. הישראלים פשוט מחפשים בכלי הלא נכון.",
            },
            {
              myth: "צריך להזמין 6 חודשים מראש",
              truth: "57% מהדילים הטובים ביותר נסגרים 3-7 שבועות לפני הטיסה. שיטה > תכנון מוקדם.",
            },
            {
              myth: "Skyscanner / Google מראים את הזול ביותר",
              truth: "הם מראים 12% מהאינוונטר. שאר ה-88% חבוי מאחורי קודים, מטבעות, ו-LCC לא מאונדקסים.",
            },
            {
              myth: "כרטיסי אשראי = חיסכון אמיתי",
              truth: "נקודות חוסכות 8-15%. השיטה הזו חוסכת 40-65%. הם משלימים — לא מחליפים.",
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

      {/* The 10 Methods */}
      <section id="methods" className="px-5 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            הפתרון
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            10 שיטות.
            <br />
            <span className="text-gradient">שיטה אחת מספיקה</span>
            <span> כדי שתרוויח חזרה את ההשקעה.</span>
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
                  <h3 className="text-xl font-bold mb-2 text-white">{m.title}</h3>
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
          <h3 className="text-xl font-bold mb-5">+ Notion Hub מלא</h3>
          <ul className="space-y-3 text-zinc-300">
            {[
              "צ׳קליסט ״10 טעויות שעולות ₪3,000״",
              "מאגר קודים ל-ITA Matrix",
              "רשימת stopover hubs + הטבות",
              "50 דוגמאות error fares היסטוריות",
              "כלים + לינקים + אתרי dispatch",
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

      {/* Bonus Stack */}
      <section className="px-5 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-sky-400 font-semibold mb-3 tracking-wider uppercase">
            הבונוסים — כלולים
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            4 בונוסים בשווי <span className="text-gradient">₪1,290</span>
          </h2>
          <p className="text-lg text-zinc-400">בלי תוספת תשלום. נשלחים מיד אחרי הרכישה.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              tag: "בונוס #1",
              value: "₪349",
              title: "Deal Hunter — בוט וואטסאפ פרטי",
              desc: "מקבל התראה כל פעם שיש Error Fare או דיל מטורף מ-TLV. בזמן אמת. 24/7.",
            },
            {
              tag: "בונוס #2",
              value: "₪299",
              title: "מאגר 50 Error Fares היסטוריות",
              desc: "ניתוח של 50 דילים שעלו בשנתיים האחרונות. מה היה הקוד, איך זוהו, איך לזהות הבא.",
            },
            {
              tag: "בונוס #3",
              value: "₪399",
              title: "המדריך לטיסות פרימיום בכסף קטן",
              desc: "Business class מ-$450 במקום $4,200. השיטה ל-Mistake Fares של דרגות העילית.",
            },
            {
              tag: "בונוס #4",
              value: "₪243",
              title: "קבוצת וואטסאפ פרטית",
              desc: "חברי המערכת בלבד. דילים שמתחלקים בזמן אמת. שאלות → תשובות מהצוות.",
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
              12 מודולים + Notion Hub + עדכונים + קבוצת וואטסאפ
            </p>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-2xl text-zinc-500 line-through">₪797</span>
              <span className="text-6xl md:text-7xl font-black text-gradient">₪397</span>
            </div>
            <p className="text-sm text-zinc-500 mb-8">
              תשלום חד-פעמי. בלי מנוי. בלי הפתעות.
            </p>

            <Link
              href="#"
              className="btn-primary block text-center w-full py-5 rounded-2xl font-bold text-white text-lg mb-4"
            >
              קנה את המערכת עכשיו
            </Link>

            <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
              <svg
                className="w-4 h-4"
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
              14 יום החזר מלא — חוסך לך ₪500+ או כסף בחזרה
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
            14 יום מהרכישה. שולח לי הודעה אחת בוואטסאפ. מקבל החזר מלא בלי שאלות.
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center font-black text-[#0a0a0f] text-sm">
              F
            </div>
            <span className="font-bold">FlyPro</span>
          </div>
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} FlyPro. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
}
