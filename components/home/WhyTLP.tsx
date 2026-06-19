"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { SectionHeading } from "@/components/Section";
import SectionBackground from "@/components/SectionBackground";
import { COMPARISON } from "@/lib/site";

export default function WhyTLP() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 md:py-32">
      <SectionBackground variant="gold" />
      <div className="container-x relative">
        <SectionHeading
          light
          center
          kicker="Why TLP"
          title={
            <>
              Not a traditional law firm.
              <br />
              <span className="text-gold-gradient">A growth partner.</span>
            </>
          }
        />

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-4xl border border-white/10">
          {/* header */}
          <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.02]">
            <div className="p-5 text-center text-sm font-medium text-paper/45 md:p-6">
              Traditional Lawyer
            </div>
            <div className="border-l border-white/10 bg-gold/[0.06] p-5 text-center md:p-6">
              <span className="font-grotesk text-sm font-semibold text-gold">
                Triage Law Partners
              </span>
            </div>
          </div>

          {COMPARISON.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid grid-cols-2 border-b border-white/5 last:border-0"
            >
              <div className="flex items-start gap-3 p-5 md:p-6">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-paper/25" />
                <span className="text-sm text-paper/50">{row.traditional}</span>
              </div>
              <div className="flex items-start gap-3 border-l border-white/10 bg-gold/[0.04] p-5 md:p-6">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={2.5}
                />
                <span className="text-sm font-medium text-paper/90">
                  {row.tlp}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
