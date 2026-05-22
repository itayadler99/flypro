import type { Metadata } from "next";
import Link from "next/link";
import CheckoutForm from "./form";

export const metadata: Metadata = {
  title: "תשלום — FlyPro",
  description: "סיום הרכישה של קורס FlyPro. תשלום מאובטח בכרטיס אשראי.",
  robots: { index: false, follow: false },
};

const provider = process.env.NEXT_PUBLIC_PAYMENT_PROVIDER || "payplus";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-right">
      <Link href="/" className="mb-8 inline-block text-sm text-sky-400 hover:text-sky-300">
        → חזרה לעמוד הראשי
      </Link>

      <p className="text-sm uppercase tracking-widest text-sky-400">סיום הזמנה</p>
      <h1 className="mt-3 text-4xl font-bold text-white">קורס FlyPro המלא</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">מה כלול</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>✓ 12 מודולי וידאו (8-15 דק׳ כל אחד)</li>
            <li>✓ ארגז כלים פרטי ב-Notion</li>
            <li>✓ בוט טלגרם להתראות 24/7</li>
            <li>✓ קבוצת WhatsApp לחברי הקורס</li>
            <li>✓ 50 Error Fares Archive</li>
            <li>✓ אחריות תוצאה — חיסכון של ₪500+ בטיסה הראשונה או החזר</li>
          </ul>
          <div className="mt-6 border-t border-slate-800 pt-4">
            <p className="text-sm text-slate-400">מחיר רגיל ₪797</p>
            <p className="mt-1 text-3xl font-bold text-white">
              ₪397 <span className="text-base font-normal text-slate-400">חד-פעמי</span>
            </p>
            <p className="mt-1 text-sm text-slate-400">או 3 תשלומים של ₪139</p>
          </div>
        </aside>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <CheckoutForm provider={provider as "payplus" | "stripe"} />
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-500">
        תשלום מאובטח. אתה מאשר את{" "}
        <Link href="/terms" className="underline">
          התקנון
        </Link>{" "}
        ואת{" "}
        <Link href="/privacy" className="underline">
          מדיניות הפרטיות
        </Link>
        .
      </p>
    </main>
  );
}
