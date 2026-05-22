"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track, uuid } from "@/lib/analytics";

export default function FreeForm() {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") || "").trim();
    const firstName = String(formData.get("firstName") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (!email || !email.includes("@")) {
      setErrorMessage("נא להזין כתובת מייל תקינה");
      setState("error");
      return;
    }

    const eventId = uuid();

    try {
      const res = await fetch("/api/lead/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, firstName, phone, eventId, source: "free-page" }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body?.error || "שגיאה. נסה שוב.");
        setState("error");
        return;
      }

      track("Lead", { content_name: "5-deals-guide", value: 0, currency: "ILS" }, eventId);
      router.push(`/thank-you?asset=free-guide`);
    } catch {
      setErrorMessage("בעיית רשת. נסה שוב.");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="firstName" className="mb-1 block text-sm text-slate-300">
          שם פרטי
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
          placeholder="דניאל"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
          מייל <span className="text-rose-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
          placeholder="you@example.com"
          dir="ltr"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm text-slate-300">
          טלפון (אופציונלי — לקבלת התראות WhatsApp)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
          placeholder="050-0000000"
          dir="ltr"
        />
      </div>

      {errorMessage && (
        <p className="rounded-lg bg-rose-500/10 px-4 py-2 text-sm text-rose-300">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-full bg-sky-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === "loading" ? "שולח..." : "שלחו לי את המדריך — חינם"}
      </button>
    </form>
  );
}
