import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { SITE, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects your personal data.`,
};

const SECTIONS = [
  {
    h: "1. Who we are",
    p: `${SITE.name} ("TLP", "we", "us") is a law firm based in ${SITE.location}, serving clients across India and the UAE. This policy explains how we handle personal data collected through this website.`,
  },
  {
    h: "2. Information we collect",
    p: "We collect information you provide directly — such as your name, company, email, phone number and the details of your enquiry — when you contact us or submit a form. We also collect limited technical data (e.g. device and usage information) to operate and improve the site.",
  },
  {
    h: "3. How we use it",
    p: "We use your information to respond to enquiries, provide and improve our services, comply with legal and regulatory obligations, and communicate with you about matters you have asked about. We do not sell your personal data.",
  },
  {
    h: "4. Confidentiality & privilege",
    p: "Enquiries submitted before an engagement is formally established may not be protected by attorney–client privilege. Please avoid sharing highly sensitive details until an engagement is confirmed in writing.",
  },
  {
    h: "5. Data protection (DPDP)",
    p: "We process personal data in line with applicable data-protection law, including India's Digital Personal Data Protection Act. You have the right to access, correct and request deletion of your personal data.",
  },
  {
    h: "6. Retention & security",
    p: "We retain personal data only as long as necessary for the purposes described or as required by law, and apply appropriate technical and organisational measures to protect it.",
  },
  {
    h: "7. Contact",
    p: `For any privacy request or question, write to us at ${CONTACT.general}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" />
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
