import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import GlobalPresence from "@/components/GlobalPresence";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sector-fluent legal counsel for startups, venture capital, fintech, AI, SaaS, healthcare, media, manufacturing, education, real estate, Web3 and cross-border businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries we serve"
        title={
          <>
            Counsel that already
            <br />
            <span className="text-gold-gradient">speaks your sector.</span>
          </>
        }
        intro="We pattern-match across the industries building the future — so your counsel arrives already fluent in the regulatory terrain you operate in."
      />
      <IndustriesGrid />
      <GlobalPresence />
    </>
  );
}
