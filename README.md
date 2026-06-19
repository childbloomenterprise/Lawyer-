# Triage Law Partners

A world-class, enterprise-grade marketing website for **Triage Law Partners** — a new-age, full-service law firm serving founders, investors and enterprises across **India and the UAE**.

> _Legal Intelligence for High-Growth Companies._

Designed to feel like a luxury consulting firm's digital headquarters — Apple/Stripe/Linear-grade — with no traditional law-firm clichés.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** — scroll reveals, micro-interactions
- **Lenis** — smooth scroll
- **lucide-react** — iconography
- Fonts: **Clash Display** (headings/wordmark) + **Inter** (body), via Fontshare

## Design system

- **Colours (60-30-10):** deep black `#0A0A0B`, warm paper `#FAFAF7`, luxury gold `#C9A24B` accent, royal purple `#6D4AFF` glow (used sparingly)
- Glassmorphism, animated gold hairlines, large display typography, generous whitespace
- Animated section backgrounds, magnetic buttons, animated counters, scroll-linked timeline
- Fully responsive & mobile-first, `prefers-reduced-motion` aware, WCAG-minded contrast

## Pages

Home · About · Services · Industries · Codex Triage (Virtual Legal Officer) · Knowledge Centre (+ articles) · Case Studies · Team (+ partner profiles) · Careers · Contact · Privacy · Terms · 404

Plus `sitemap.xml`, `robots.txt`, and `LegalService` JSON-LD structured data.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve production build
```

> Do not run `npm run build` while `npm run dev` is active — they share the `.next` cache.

## Content

All site content lives in [`lib/site.ts`](lib/site.ts) — a single source of truth for copy, services, team, insights and contact details.

## Not yet wired (intentional)

- Contact form is frontend-only (stub) — connect to an API route / CRM / email service
- Team portraits are monogram placeholders
- Knowledge Centre article bodies are sample text (designed to be CMS-backed)

---

© Triage Law Partners · `#legaltriage` · Kochi, Kerala
