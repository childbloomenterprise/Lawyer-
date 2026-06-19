"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Section";
import { CONTACT } from "@/lib/site";

// Approximate positions on the dotted map (viewBox 0 0 1000 500)
const POINTS = [
  { city: "Kochi", x: 690, y: 300, label: "HQ · India" },
  { city: "Dubai", x: 615, y: 250, label: "Cross-border desk · UAE" },
];

export default function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/10 blur-[150px]" />
      <div className="container-x relative">
        <SectionHeading
          light
          center
          kicker="Global presence"
          title={
            <>
              Two markets.{" "}
              <span className="text-gold-gradient">One retainer.</span>
            </>
          }
          intro="Headquartered in Kochi, with a cross-border desk serving the UAE and the wider GCC — and an expansion footprint across nine countries."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <svg
            viewBox="0 0 1000 500"
            className="w-full"
            fill="none"
            aria-label="World map showing India and UAE presence"
          >
            <defs>
              <radialGradient id="dot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E4C97E" />
                <stop offset="100%" stopColor="#6D4AFF" />
              </linearGradient>
            </defs>

            {/* dotted globe grid */}
            {Array.from({ length: 13 }).map((_, r) =>
              Array.from({ length: 30 }).map((_, c) => {
                const x = 40 + c * 32;
                const y = 60 + r * 30;
                // crude continent mask via sine to feel organic
                const show =
                  Math.sin(c * 0.5) + Math.cos(r * 0.6) > -0.7 &&
                  (x < 520 || x > 560 || y < 200);
                if (!show) return null;
                return (
                  <circle
                    key={`${r}-${c}`}
                    cx={x}
                    cy={y}
                    r="2.2"
                    fill="url(#dot)"
                  />
                );
              })
            )}

            {/* connection arc */}
            <motion.path
              d="M690 300 Q650 200 615 250"
              stroke="url(#arc)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />

            {POINTS.map((p, i) => (
              <g key={p.city}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="20"
                  fill="#C9A24B"
                  opacity="0.15"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.4, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.3, duration: 1 }}
                />
                <circle cx={p.x} cy={p.y} r="5" fill="#E4C97E" />
                <text
                  x={p.x}
                  y={p.y - 16}
                  textAnchor="middle"
                  className="fill-paper font-grotesk"
                  fontSize="15"
                  fontWeight="600"
                >
                  {p.city}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          {CONTACT.offices.map((o) => (
            <Reveal key={o.city} office={o} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reveal({
  office,
}: {
  office: { city: string; region: string; label: string; detail: string };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-6"
    >
      <p className="text-xs font-medium uppercase tracking-kicker text-gold">
        {office.label}
      </p>
      <h3 className="mt-2 font-grotesk text-2xl font-semibold tracking-tight">
        {office.city}
      </h3>
      <p className="text-sm text-paper/50">{office.region}</p>
      <p className="mt-3 text-sm text-paper/65">{office.detail}</p>
    </motion.div>
  );
}
