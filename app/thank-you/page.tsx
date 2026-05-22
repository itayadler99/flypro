import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ThankYouTracker from "./tracker";

export const metadata: Metadata = {
  title: "תודה — FlyPro",
  description: "תודה על ההצטרפות. הנה הצעדים הבאים.",
  robots: { index: false, follow: false },
};

type Search = { asset?: string; order?: string };

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const { asset, order } = (await searchParams) || {};
  const isPurchase = !!order;

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-2xl flex-col justify-center px-6 py-16 text-right">
      <Suspense fallback={null}>
        <ThankYouTracker asset={asset} order={order} />
      </Suspense>

      <p className="text-sm uppercase tracking-widest text-emerald-400">
        {isPurchase ? "התשלום עבר" : "ההרשמה אושרה"}
      </p>
      <h1 className="mt-3 text-4xl font-bold text-white">
        {isPurchase ? "ברוך הבא ל-FlyPro" : "המדריך בדרך אליך"}
      </h1>

      {isPurchase ? (
        <div className="mt-6 space-y-4 text-slate-300">
          <p>שלחנו אליך מייל עם פרטי הגישה לקורס המלא, ל-Notion ולקבוצת ה-WhatsApp.</p>
          <ul className="mr-6 list-disc space-y-2">
            <li>מספר הזמנה: {order}</li>
            <li>חשבונית מס נשלחת אוטומטית למייל תוך 24 שעות.</li>
            <li>הגישה לקורס פעילה מיד.</li>
          </ul>
        </div>
      ) : (
        <div className="mt-6 space-y-4 text-slate-300">
          <p>
            המדריך &quot;5 דילים שחסכו ₪3,000&quot; נשלח כעת למייל שהזנת. בדוק גם בתיקיית
            הספאם.
          </p>
          <p>בינתיים, הצטרף לבוט הטלגרם שלנו וקבל התראות דילים כל 3 שעות.</p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="https://t.me/flypro_deals_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
        >
          הצטרף לבוט הטלגרם
        </a>
        <Link
          href="/"
          className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800"
        >
          לעמוד הראשי
        </Link>
      </div>
    </main>
  );
}
