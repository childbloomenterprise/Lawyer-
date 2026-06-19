import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { SITE, CONTACT, FOOTER_LINKS } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-wide relative py-20 md:py-28">
        {/* CTA band */}
        <div className="gradient-border mb-20 rounded-4xl p-10 md:p-16">
          <p className="kicker text-gold">
            <span className="h-px w-8 bg-gold" /> Ready when you are
          </p>
          <h2 className="mt-5 max-w-3xl font-grotesk text-4xl font-semibold tracking-tightest md:text-6xl">
            Let&apos;s make legal your{" "}
            <span className="text-gold-gradient">competitive advantage.</span>
          </h2>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light cursor-pointer"
            >
              Book a Strategy Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-white/40 cursor-pointer"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed text-paper/55">
              {SITE.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-paper/70">
              <a
                href={`mailto:${CONTACT.general}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" /> {CONTACT.general}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" /> {CONTACT.phone}
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-gold" /> {SITE.location}
              </span>
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-kicker text-paper/40">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-paper/70 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-paper/45 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.hashtag} · {SITE.location}
          </p>
          <p>
            {SITE.domain} · Crafted as a strategic legal headquarters.
          </p>
        </div>
      </div>
    </footer>
  );
}
