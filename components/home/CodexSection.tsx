"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowUpRight,
  Activity,
  ShieldCheck,
  MessageSquare,
  FileCheck2,
} from "lucide-react";
import { Kicker } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { CODEX_FEATURES } from "@/lib/site";

export default function CodexSection() {
  return (
    <section
      id="codex"
      className="relative overflow-hidden bg-ink py-24 text-paper md:py-32"
    >
      {/* purple glow signature (animated) */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-royal/25 blur-[150px]" />
      <div className="animate-float-y pointer-events-none absolute bottom-0 left-[14%] h-[300px] w-[400px] rounded-full bg-gold/15 blur-[120px]" />
      <div className="animate-drift-slow pointer-events-none absolute right-[8%] top-1/4 h-[260px] w-[260px] rounded-full bg-royal/15 blur-[120px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* copy */}
        <div>
          <Kicker light>Codex Triage</Kicker>
          <Reveal>
            <h2 className="mt-5 font-grotesk text-4xl font-semibold tracking-tightest md:text-6xl">
              Your Virtual Legal
              <br />
              Officer.{" "}
              <span className="text-gold-gradient">On subscription.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/60">
              Dedicated senior counsel on a monthly subscription. No
              billable-hour surprises. Direct access. Proactive, not reactive —
              built for startups from Day 1.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {CODEX_FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="flex gap-3"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-paper">{f.title}</p>
                  <p className="text-xs leading-relaxed text-paper/45">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/codex-triage"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light cursor-pointer"
            >
              Explore Codex Triage
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* dashboard mockup */}
        <Reveal delay={0.1}>
          <div className="gradient-border relative rounded-4xl p-2 shadow-[0_40px_120px_-30px_rgba(109,74,255,0.4)]">
            <div className="overflow-hidden rounded-[1.6rem] bg-ink-800">
              {/* window chrome */}
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-kicker text-paper/40">
                  codex · VLO console
                </span>
              </div>

              <div className="space-y-4 p-5">
                {/* status row */}
                <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs font-medium text-paper/80">
                      Counsel online · avg. response 11 min
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-gold">
                    9×5 active
                  </span>
                </div>

                {/* metric cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: FileCheck2, k: "Contracts", v: "14", s: "reviewed" },
                    { icon: ShieldCheck, k: "Risks", v: "3", s: "flagged" },
                    { icon: Activity, k: "Matters", v: "7", s: "active" },
                  ].map((c) => {
                    const I = c.icon;
                    return (
                      <div
                        key={c.k}
                        className="rounded-xl border border-white/8 bg-white/[0.02] p-3"
                      >
                        <I className="h-4 w-4 text-gold" strokeWidth={1.6} />
                        <p className="mt-3 font-grotesk text-2xl font-semibold">
                          {c.v}
                        </p>
                        <p className="text-[10px] text-paper/45">
                          {c.k} {c.s}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* activity feed */}
                <div className="space-y-2.5 rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  {[
                    { t: "SAFE note reviewed — 2 clauses renegotiated", c: "text-gold" },
                    { t: "DPDP gap flagged in vendor MSA", c: "text-royal-glow" },
                    { t: "Strategy call scheduled · Thu 4:00", c: "text-paper/50" },
                  ].map((row, i) => (
                    <motion.div
                      key={row.t}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <MessageSquare className={`h-3.5 w-3.5 ${row.c}`} />
                      <span className="text-xs text-paper/65">{row.t}</span>
                    </motion.div>
                  ))}
                </div>

                {/* retainer bar */}
                <div className="rounded-xl bg-gradient-to-r from-gold/15 to-royal/15 p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-paper/70">Monthly retainer</span>
                    <span className="font-semibold text-paper">Active</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-gold-light to-gold"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
