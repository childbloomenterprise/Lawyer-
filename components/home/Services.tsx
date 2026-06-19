"use client";

import Link from "next/link";
import {
  Briefcase,
  GitMerge,
  ShieldCheck,
  Lock,
  FileSignature,
  Landmark,
  Users,
  Globe2,
  Scale,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const TILES = [
  { icon: Briefcase, title: "Venture Capital & PE", desc: "Fundraising, term sheets, SHAs and ESOPs — founder-first, investor-fluent." },
  { icon: GitMerge, title: "Mergers & Acquisitions", desc: "Diligence, structuring and definitive agreements from LOI to close." },
  { icon: ShieldCheck, title: "Intellectual Property", desc: "Trademark, patent and trade-secret strategy that protects your moat." },
  { icon: Lock, title: "Data Protection & Privacy", desc: "DPDP readiness, consent architecture and cross-border transfers." },
  { icon: FileSignature, title: "Commercial Contracts", desc: "MSAs, SaaS terms and partnerships drafted to be enforced." },
  { icon: Landmark, title: "Corporate Governance", desc: "Board structure, fiduciary frameworks and compliance discipline." },
  { icon: Users, title: "Labour & Employment", desc: "Founder agreements, ESOPs, POSH and workforce restructuring." },
  { icon: Globe2, title: "Cross-Border", desc: "India–UAE structuring, GCC entry, FEMA and global expansion." },
  { icon: Scale, title: "Litigation & Disputes", desc: "Writs, arbitration, regulatory defence and white-collar matters." },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-paper py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            kicker="What we do"
            title={
              <>
                Full-service counsel,
                <br />
                <span className="text-ink/40">engineered for momentum.</span>
              </>
            }
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/40 cursor-pointer"
          >
            All services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <RevealGroup
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {TILES.map((t) => {
            const Icon = t.icon;
            return (
              <RevealItem key={t.title}>
                <motion.div
                  whileTap={{ scale: 0.985 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-500 ease-luxe hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_30px_70px_-32px_rgba(10,10,11,0.28)] md:p-8"
                >
                  {/* gold corner glow on hover */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  {/* sweeping sheen */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="relative flex h-full flex-col">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-ink/10 bg-mist text-ink transition-all duration-500 group-hover:-rotate-6 group-hover:border-gold/50 group-hover:bg-gold group-hover:text-ink">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-6 font-grotesk text-xl font-semibold tracking-tight text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/55">
                      {t.desc}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-ink/35 transition-colors duration-500 group-hover:text-gold-deep">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
