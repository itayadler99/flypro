import Link from "next/link";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-right leading-relaxed text-slate-200">
      <Link href="/" className="mb-8 inline-block text-sm text-sky-400 hover:text-sky-300">
        → חזרה לעמוד הראשי
      </Link>
      <article className="prose-legal space-y-6">{children}</article>
    </main>
  );
}
