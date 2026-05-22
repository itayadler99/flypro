import type { Metadata } from "next";
import Link from "next/link";
import FreeForm from "./form";

export const metadata: Metadata = {
  title: "המדריך החינמי — 5 דילים שחסכו ₪3,000",
  description:
    "המדריך החינמי של FlyPro: 5 דילים אמיתיים מהשנה האחרונה, פירוט מלא איך מצאנו אותם, והשיטה לשחזר.",
  alternates: { canonical: "/free" },
};

const BENEFITS = [
  "5 דילים אמיתיים שחסכו לישראלים ₪3,000+ כל אחד",
  "פירוט מלא של מסלול הקנייה — מאיפה נמצא ועד אישור הזמנה",
  "טבלת השוואה: המחיר ב-Skyscanner מול המחיר ששילמנו",
  "טעות אחת קריטית שכמעט כל ישראלי עושה — ואיך להימנע ממנה",
  "הגישה לבוט הטלגרם של דילים חיים",
];

export default function FreePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-right">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-sky-400 hover:text-sky-300"
      >
        → חזרה לעמוד הראשי
      </Link>

      <p className="text-sm uppercase tracking-widest text-sky-400">
        מדריך חינמי
      </p>
      <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
        5 דילים שחסכו{" "}
        <span className="text-emerald-400">₪3,000</span> ומה{" "}
        <span className="underline decoration-sky-500 decoration-4 underline-offset-4">
          השיטה
        </span>{" "}
        מאחוריהם
      </h1>
      <p className="mt-5 text-lg text-slate-300">
        לא בלוגרית. לא מזל. שיטה ספציפית שאפשר לשחזר. הכנסת מייל למטה ותקבל את
        המדריך במייל תוך 60 שניות.
      </p>

      <ul className="mt-10 space-y-3 text-slate-200">
        {BENEFITS.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-1 text-emerald-400">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur">
        <FreeForm />
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        בהרשמה אתה מאשר את{" "}
        <Link href="/terms" className="underline">
          תקנון השימוש
        </Link>{" "}
        ואת{" "}
        <Link href="/privacy" className="underline">
          מדיניות הפרטיות
        </Link>
        . ניתן להסיר בכל עת.
      </p>
    </main>
  );
}
