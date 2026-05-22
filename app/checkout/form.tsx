"use client";

import { useState } from "react";
import { track, uuid } from "@/lib/analytics";

type Props = { provider: "payplus" | "stripe" };

export default function CheckoutForm({ provider }: Props) {
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [installments, setInstallments] = useState<1 | 3>(1);
  const amount = 397;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    const firstName = String(fd.get("firstName") || "").trim();
    const lastName = String(fd.get("lastName") || "").trim();
    const phone = String(fd.get("phone") || "").trim();

    if (!email || !email.includes("@")) {
      setError("נא להזין מייל תקין");
      setState("error");
      return;
    }

    const eventId = uuid();
    track("InitiateCheckout", { value: amount, currency: "ILS" }, eventId);

    try {
      const res = await fetch(`/api/checkout/${provider}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          amount,
          installments,
          eventId,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "שגיאה בפתיחת תשלום");
        setState("error");
        return;
      }

      if (data?.url) {
        window.location.href = data.url as string;
      } else {
        setError("לא התקבל קישור תשלום. נסה שוב.");
        setState("error");
      }
    } catch {
      setError("בעיית רשת. נסה שוב.");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm text-slate-300">
            שם פרטי
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block text-sm text-slate-300">
            שם משפחה
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
          />
        </div>
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
          dir="ltr"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm text-slate-300">
          טלפון
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          dir="ltr"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
        />
      </div>

      <fieldset>
        <legend className="mb-1 block text-sm text-slate-300">אופן תשלום</legend>
        <div className="grid grid-cols-2 gap-3">
          <label
            className={`flex cursor-pointer flex-col rounded-lg border p-4 ${
              installments === 1
                ? "border-sky-500 bg-sky-500/10"
                : "border-slate-700 bg-slate-950"
            }`}
          >
            <input
              type="radio"
              name="installments"
              value="1"
              checked={installments === 1}
              onChange={() => setInstallments(1)}
              className="sr-only"
            />
            <span className="font-semibold text-white">תשלום אחד</span>
            <span className="text-sm text-slate-400">₪397</span>
          </label>
          <label
            className={`flex cursor-pointer flex-col rounded-lg border p-4 ${
              installments === 3
                ? "border-sky-500 bg-sky-500/10"
                : "border-slate-700 bg-slate-950"
            }`}
          >
            <input
              type="radio"
              name="installments"
              value="3"
              checked={installments === 3}
              onChange={() => setInstallments(3)}
              className="sr-only"
            />
            <span className="font-semibold text-white">3 תשלומים</span>
            <span className="text-sm text-slate-400">3 × ₪139</span>
          </label>
        </div>
      </fieldset>

      {error && (
        <p className="rounded-lg bg-rose-500/10 px-4 py-2 text-sm text-rose-300">{error}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-full bg-sky-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === "loading" ? "פותח תשלום..." : `המשך לתשלום מאובטח (${provider === "payplus" ? "PayPlus" : "Stripe"})`}
      </button>
    </form>
  );
}
