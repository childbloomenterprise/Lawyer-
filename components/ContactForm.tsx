"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ArrowUpRight } from "lucide-react";

const MATTERS = [
  "Venture / Fundraising",
  "M&A",
  "Cross-Border (India–UAE)",
  "Data Protection / DPDP",
  "Contracts",
  "Dispute / Regulatory",
  "Codex Triage (VLO)",
  "Other",
];

const inputBase =
  "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors duration-200 focus:border-gold focus:ring-2 focus:ring-gold/20";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    // Frontend stub — wire to an API route / CRM / email service in production.
    setTimeout(() => setStatus("sent"), 1100);
  };

  return (
    <div className="relative rounded-4xl border border-ink/10 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(10,10,11,0.25)] md:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold-deep">
              <Check className="h-8 w-8" strokeWidth={2.5} />
            </span>
            <h3 className="mt-6 font-grotesk text-2xl font-semibold tracking-tight text-ink">
              Message received.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
              Thank you — a partner will review your enquiry and respond within
              one business day. For urgent matters, call or WhatsApp us directly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/55"
                >
                  Full name
                </label>
                <input id="name" name="name" required placeholder="Jane Founder" className={inputBase} />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/55"
                >
                  Company
                </label>
                <input id="company" name="company" placeholder="Acme Inc." className={inputBase} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/55"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputBase}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/55"
                >
                  Phone <span className="font-normal normal-case text-ink/35">(optional)</span>
                </label>
                <input id="phone" name="phone" placeholder="+91 ..." className={inputBase} />
              </div>
            </div>

            <div>
              <label
                htmlFor="matter"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/55"
              >
                Type of matter
              </label>
              <select id="matter" name="matter" required className={`${inputBase} cursor-pointer`}>
                <option value="">Select a matter…</option>
                {MATTERS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink/55"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="A few lines on where you are and what you need…"
                className={`${inputBase} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors hover:bg-ink-700 disabled:opacity-70 cursor-pointer"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send enquiry
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-ink/40">
              By submitting, you agree to our privacy policy. We never share your
              details.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
