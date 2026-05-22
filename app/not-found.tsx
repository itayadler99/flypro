import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-sky-400">404</p>
      <h1 className="mt-3 text-4xl font-bold text-white">העמוד לא נמצא</h1>
      <p className="mt-4 max-w-md text-slate-400">
        הקישור שניסית להגיע אליו לא קיים או הועבר. אולי שווה לחזור לעמוד הראשי ולגלות איך
        ישראלים מוצאים טיסות זולות ב-50% מחיר.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400"
      >
        ← חזרה לעמוד הראשי
      </Link>
    </main>
  );
}
