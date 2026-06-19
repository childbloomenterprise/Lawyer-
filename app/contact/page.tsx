import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a strategy call with Triage Law Partners. Offices in Kochi (India) and a cross-border desk for the UAE. Email, phone and WhatsApp.",
};

export default function ContactPage() {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.general,
      href: `mailto:${CONTACT.general}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT.phone,
      href: `https://wa.me/${CONTACT.whatsapp}`,
    },
  ];

  return (
    <>
      <PageHero
        kicker="Get in touch"
        title={
          <>
            Let&apos;s talk about
            <br />
            <span className="text-gold-gradient">where you&apos;re headed.</span>
          </>
        }
        intro="Tell us where you are and what you need. A partner will respond within one business day — no billable-hour clock on the first conversation."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* details */}
          <Reveal delay={0.1}>
            <div className="space-y-8">
              {/* channels */}
              <div className="space-y-3">
                {channels.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.label === "WhatsApp" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_50px_-30px_rgba(10,10,11,0.25)] cursor-pointer"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                          {c.label}
                        </p>
                        <p className="font-grotesk text-lg font-medium text-ink">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* offices */}
              <div className="rounded-4xl border border-ink/10 bg-mist p-7">
                <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-kicker text-ink/45">
                  <MapPin className="h-4 w-4 text-gold-deep" /> Offices
                </h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {CONTACT.offices.map((o) => (
                    <div key={o.city}>
                      <p className="font-grotesk text-lg font-semibold tracking-tight text-ink">
                        {o.city}
                      </p>
                      <p className="text-sm text-ink/50">{o.region}</p>
                      <p className="mt-1 text-xs font-medium text-gold-deep">
                        {o.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* hours */}
              <div className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                <div>
                  <p className="text-sm font-semibold text-ink">9×5 direct access</p>
                  <p className="text-sm text-ink/55">
                    Mon–Fri · IST & GST. Codex Triage clients reach counsel
                    directly; urgent matters are triaged immediately.
                  </p>
                </div>
              </div>

              <p className="text-xs text-ink/40">
                {SITE.name} · {SITE.location} · {SITE.hashtag}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
