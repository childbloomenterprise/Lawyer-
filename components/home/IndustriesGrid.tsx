"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Section";
import { INDUSTRIES } from "@/lib/site";

export default function IndustriesGrid() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          center
          kicker="Industries"
          title={<>Fluent in the sectors building the future.</>}
          intro="We pattern-match across the industries we serve — so you get counsel that already knows your regulatory terrain."
        />

        <div className="mt-14 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.button
              key={ind.name}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500 ease-luxe cursor-pointer ${
                active === i
                  ? "-translate-y-1 border-gold/40 bg-ink text-paper shadow-[0_24px_60px_-24px_rgba(10,10,11,0.5)]"
                  : "border-ink/10 bg-white text-ink hover:-translate-y-0.5 hover:border-ink/25"
              }`}
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/30 blur-2xl transition-opacity duration-500 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
              <span
                className={`font-grotesk text-xs font-semibold transition-colors ${
                  active === i ? "text-gold" : "text-ink/30"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-grotesk text-xl font-semibold tracking-tight">
                {ind.name}
              </h3>
              <p
                className={`mt-1.5 text-sm transition-colors ${
                  active === i ? "text-paper/55" : "text-ink/50"
                }`}
              >
                {ind.desc}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
