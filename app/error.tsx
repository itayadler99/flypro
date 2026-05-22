"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to server logs / future error tracker.
    console.error("[app:error]", error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-rose-400">שגיאה</p>
      <h1 className="mt-3 text-4xl font-bold text-white">משהו נשבר</h1>
      <p className="mt-4 max-w-md text-slate-400">
        קרתה תקלה שלא ציפינו לה. הצוות קיבל התראה. אפשר לנסות שוב או לחזור לעמוד הראשי.
      </p>
      {error?.digest && (
        <p className="mt-2 text-xs text-slate-500">קוד שגיאה: {error.digest}</p>
      )}
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
        >
          נסה שוב
        </button>
        <a
          href="/"
          className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800"
        >
          לעמוד הראשי
        </a>
      </div>
    </main>
  );
}
