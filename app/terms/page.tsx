import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { SITE, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms governing your use of the ${SITE.name} website.`,
};

const SECTIONS = [
  {
    h: "1. No legal advice",
    p: "The content on this website is for general information only and does not constitute legal advice. Reading this site does not create an attorney–client relationship. You should not act on any information here without seeking professional counsel for your specific situation.",
  },
  {
    h: "2. No solicitation",
    p: "Nothing on this website is intended to be, nor should be construed as, an advertisement, solicitation or invitation for work, in compliance with the rules of the Bar Council of India. Any access is at the user's own volition and any information is provided on request.",
  },
  {
    h: "3. Engagement",
    p: "An engagement with TLP begins only when confirmed in a written engagement letter signed by both parties. Until then, no obligation, retainer or duty of confidentiality arises from contact via this site.",
  },
  {
    h: "4. Intellectual property",
    p: `All content, branding and design on this website are the property of ${SITE.name} unless otherwise stated, and may not be reproduced without permission.`,
  },
  {
    h: "5. Limitation of liability",
    p: "We make reasonable efforts to keep information accurate and current but make no warranties as to completeness or accuracy. We are not liable for any loss arising from reliance on the content of this website.",
  },
  {
    h: "6. Governing law",
    p: "These terms are governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of the courts at Kochi, Kerala.",
  },
  {
    h: "7. Contact",
    p: `Questions about these terms? Write to us at ${CONTACT.general}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Terms of Use" />
      <section className="bg-paper py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-ink/45">Last updated: June 2026</p>
          <div className="mt-10 space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2 className="font-grotesk text-xl font-semibold tracking-tight text-ink">
                  {s.h}
                </h2>
                <p className="mt-3 leading-relaxed text-ink/65">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
