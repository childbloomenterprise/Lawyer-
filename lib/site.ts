// Single source of truth for site content & contact details.
// Real data sourced from the Triage Law Partners flyer; copy written in brand voice.

export const SITE = {
  name: "Triage Law Partners",
  short: "TLP",
  hashtag: "#legaltriage",
  tagline: "Legal Intelligence for High-Growth Companies",
  domain: "triagelawpartners.com",
  url: "https://triagelawpartners.com",
  description:
    "Triage Law Partners is a new-age, full-service law firm for founders, investors and enterprises across India and the UAE. Strategic legal partnership — precise assessment, impact-first prioritisation, clean execution.",
  location: "Kochi, Kerala, India",
};

export const CONTACT = {
  general: "support@triagelawpartners.com",
  phone: "+91 73065 08037",
  whatsapp: "+917306508037",
  offices: [
    {
      city: "Kochi",
      region: "Kerala, India",
      label: "Headquarters",
      detail: "Strategic & disputes practice",
    },
    {
      city: "Dubai",
      region: "United Arab Emirates",
      label: "Cross-border desk",
      detail: "GCC market entry & structuring",
    },
  ],
};

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Codex Triage", href: "/codex-triage" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  {
    title: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "The Triage Method", href: "/about#method" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Codex Triage", href: "/codex-triage" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Centre", href: "/knowledge" },
      { label: "Insights", href: "/insights" },
      { label: "Book a Call", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export const STATS = [
  { value: 100, prefix: "$", suffix: "M+", label: "in deals closed" },
  { value: 20, prefix: "", suffix: "+", label: "VC / PE / debt projects" },
  { value: 9, prefix: "", suffix: "+", label: "countries covered" },
  { value: 15, prefix: "", suffix: "+ yrs", label: "combined experience" },
];

// ── Services ─────────────────────────────────────────────
export const SERVICE_GROUPS = [
  {
    id: "advisory",
    title: "Advisory & Transactional",
    blurb:
      "The deal-side practice. We sit on your side of the table from term sheet to close.",
    services: [
      {
        title: "Venture Capital & Private Equity",
        desc: "Fundraising, term sheets, SHAs, SSAs, ESOPs and down-round defence — founder-first, investor-fluent.",
      },
      {
        title: "Mergers & Acquisitions",
        desc: "Diligence, structuring, definitive agreements and integration for acquirers and targets alike.",
      },
      {
        title: "Intellectual Property",
        desc: "Trademarks, patents, copyright and trade-secret strategy that protects what makes you defensible.",
      },
      {
        title: "Data Protection & Privacy",
        desc: "DPDP Act readiness, consent architecture, data-processing agreements and cross-border transfer design.",
      },
      {
        title: "Commercial Contracts",
        desc: "MSAs, SaaS terms, vendor and partnership agreements — drafted to be enforced, not just signed.",
      },
      {
        title: "Corporate Governance",
        desc: "Board structure, fiduciary frameworks, compliance calendars and secretarial discipline.",
      },
      {
        title: "Labour & Employment",
        desc: "Founder agreements, employment contracts, POSH compliance and workforce restructuring.",
      },
      {
        title: "International Trade & Cross-Border",
        desc: "India–UAE structuring, GCC market entry, FEMA, and multi-jurisdiction expansion.",
      },
    ],
  },
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    blurb:
      "When a regulator oversteps or a dispute demands courtroom authority — this is the team founders turn to.",
    services: [
      {
        title: "PMLA & AML Compliance",
        desc: "Investigations, representation and proactive anti-money-laundering programmes.",
      },
      {
        title: "Constitutional & Writ Jurisdiction",
        desc: "High Court and Supreme Court writs challenging regulatory and state action.",
      },
      {
        title: "Commercial Arbitration",
        desc: "Domestic and international arbitration, enforcement and interim relief.",
      },
      {
        title: "Regulatory Enforcement & Defence",
        desc: "Defence before SEBI, RBI, ED and sectoral regulators with a strategy-first posture.",
      },
      {
        title: "White-Collar Criminal Defence",
        desc: "Economic-offence defence, anticipatory protection and reputation management.",
      },
    ],
  },
];

// ── Triage Methodology ──────────────────────────────────
export const METHOD = [
  {
    step: "01",
    title: "Triage",
    desc: "Every matter starts with precise assessment. We diagnose the legal reality before anyone touches a document.",
  },
  {
    step: "02",
    title: "Assessment",
    desc: "We map the facts, the exposure and the stakeholders — the full clinical picture of your position.",
  },
  {
    step: "03",
    title: "Risk Mapping",
    desc: "Impact-first prioritisation. We rank what's urgent, what's important, and what can wait.",
  },
  {
    step: "04",
    title: "Strategic Planning",
    desc: "A clear roadmap with options, trade-offs and a recommended path — in plain language.",
  },
  {
    step: "05",
    title: "Execution",
    desc: "Clean, decisive execution. No billable-hour theatre — just the work that moves you forward.",
  },
  {
    step: "06",
    title: "Partnership",
    desc: "We stay. As you scale, we become the legal backbone that grows with the company.",
  },
];

// ── Codex Triage (VLO) ──────────────────────────────────
export const CODEX_FEATURES = [
  { title: "Dedicated senior counsel", desc: "Direct line to a partner-level advisor — not a rotating junior pool." },
  { title: "Fixed monthly retainer", desc: "Predictable pricing. No billable-hour surprises, ever." },
  { title: "9×5 direct access", desc: "Proactive, not reactive. We flag the risk before it becomes a fire." },
  { title: "Unlimited strategy calls", desc: "Talk through term sheets, hires and contracts as often as you need." },
  { title: "Contract reviews", desc: "Turn-around on the agreements that keep the business moving." },
  { title: "India & UAE coverage", desc: "One retainer, two of the fastest-growing markets on earth." },
];

export const ENGAGEMENT = [
  {
    name: "Case-by-Case",
    price: "Fixed fee",
    tagline: "For one-off matters",
    desc: "A defined scope, a defined fee. Ideal for a single transaction, filing or dispute.",
    features: ["Scoped deliverable", "Fixed quote upfront", "Senior-led execution", "No retainer required"],
    featured: false,
  },
  {
    name: "Codex Triage — VLO",
    price: "Monthly retainer",
    tagline: "Your legal backbone",
    desc: "A Virtual Legal Officer on subscription. Proactive counsel built for startups from Day 1.",
    features: [
      "Dedicated senior counsel",
      "Unlimited strategy calls",
      "Contract reviews included",
      "Regulatory guidance",
      "Scales as you grow",
    ],
    featured: true,
  },
  {
    name: "Hourly Retainer",
    price: "Flexible",
    tagline: "Flexible and scalable",
    desc: "Draw down counsel as you need it, against a flexible retainer. Full transparency on time.",
    features: ["Pay for what you use", "Transparent time logs", "Scales up or down", "Priority response"],
    featured: false,
  },
];

// ── Industries ──────────────────────────────────────────
export const INDUSTRIES = [
  { name: "Startups", desc: "Day-1 to Series C and beyond." },
  { name: "Venture Capital", desc: "Fund formation to portfolio support." },
  { name: "Fintech", desc: "RBI, lending, payments & compliance." },
  { name: "Artificial Intelligence", desc: "Model risk, IP and data governance." },
  { name: "SaaS", desc: "Contracts, privacy and global GTM." },
  { name: "Healthcare", desc: "Regulatory, data and clinical matters." },
  { name: "Media & Entertainment", desc: "Rights, licensing and disputes." },
  { name: "Manufacturing", desc: "Commercial, labour and trade." },
  { name: "Education", desc: "EdTech compliance and structuring." },
  { name: "Real Estate", desc: "Transactions, RERA and disputes." },
  { name: "Web3", desc: "Token structuring and cross-border." },
  { name: "Cross-Border", desc: "India–UAE and GCC expansion." },
];

// ── Why TLP comparison ──────────────────────────────────
export const COMPARISON = [
  { traditional: "Reactive — called in after the fire starts", tlp: "Proactive — risk flagged before it ignites" },
  { traditional: "Opaque hourly billing", tlp: "Fixed, predictable retainers" },
  { traditional: "Slow, deferential to process", tlp: "Fast, decisive, founder-speed" },
  { traditional: "Courtroom-first mindset", tlp: "Growth-partner mindset" },
  { traditional: "Juniors do the work, partners bill", tlp: "Senior counsel, direct access" },
  { traditional: "One jurisdiction, one playbook", tlp: "India + UAE, cross-border native" },
];

// ── Team ────────────────────────────────────────────────
export const TEAM = [
  {
    slug: "subeesh-hrishikesh",
    name: "Subeesh Hrishikesh",
    role: "Partner — Dispute Resolution & Regulatory Law",
    initials: "SH",
    email: "subeesh@triagelawpartners.com",
    phone: "+91 73065 08037",
    bio: "High Court of Kerala advocate whose practice spans constitutional litigation, writ jurisdiction and regulatory enforcement. Subeesh is the partner founders turn to when a regulator oversteps or a dispute demands courtroom authority.",
    long: "Co-architect of TLP's triage methodology and its Gandhian, client-first philosophy — legal counsel that serves the client's real interest, not the firm's billing cycle. His courtroom record across constitutional and regulatory matters gives the firm a litigation spine most boutique advisory shops simply don't have.",
    focus: ["Constitutional Litigation", "Writ Jurisdiction", "Regulatory Enforcement", "Commercial Arbitration"],
  },
  {
    slug: "kenneth-joe-cleetus",
    name: "Kenneth Joe Cleetus",
    role: "Partner — Technology, Fintech, Media & Cross-Border",
    initials: "KC",
    email: "ken@triagelawpartners.com",
    phone: "+91 85472 47011",
    bio: "Strategic legal advisor to boards and an independent director with deep expertise in cross-border expansion for technology companies.",
    long: "Kenneth guides Web3 startups, fintech ventures, media companies and cross-border businesses through complex regulatory landscapes across multiple jurisdictions — creating scalable legal frameworks that support global growth for new-age ventures. He is the architect of Codex Triage, TLP's Virtual Legal Officer subscription.",
    focus: ["Technology Law", "Fintech & Payments", "Cross-Border Structuring", "Corporate Governance"],
  },
];

// ── Knowledge / Insights ────────────────────────────────
export const INSIGHTS = [
  {
    slug: "dpdp-act-readiness",
    category: "Data Protection",
    title: "The DPDP Act is here. Most startups aren't ready.",
    excerpt:
      "A founder's field guide to consent architecture, data-processing agreements and the operational changes the DPDP Act actually demands.",
    date: "2026-05-28",
    read: "8 min",
  },
  {
    slug: "term-sheet-traps",
    category: "Venture Capital",
    title: "Seven term-sheet clauses that quietly cost founders control",
    excerpt:
      "Liquidation preferences, anti-dilution, and the board-composition language most first-time founders sign without negotiating.",
    date: "2026-05-12",
    read: "6 min",
  },
  {
    slug: "india-uae-expansion",
    category: "Cross-Border",
    title: "Structuring an India–UAE expansion without double taxation",
    excerpt:
      "How growth-stage companies use the right holding structure to enter the GCC cleanly — and the mistakes that trigger FEMA scrutiny.",
    date: "2026-04-30",
    read: "9 min",
  },
  {
    slug: "ai-regulation-india",
    category: "AI Regulation",
    title: "What India's emerging AI rules mean for model builders",
    excerpt:
      "Liability, training-data provenance and the governance posture AI companies should adopt before regulation crystallises.",
    date: "2026-04-15",
    read: "7 min",
  },
  {
    slug: "esop-mistakes",
    category: "Startups",
    title: "The ESOP mistakes that surface during diligence",
    excerpt:
      "Vesting cliffs, exercise windows and pool sizing — the equity decisions that look fine until an acquirer's lawyers arrive.",
    date: "2026-03-22",
    read: "5 min",
  },
  {
    slug: "white-collar-defence",
    category: "Litigation",
    title: "When the ED calls: a calm-headed first-response playbook",
    excerpt:
      "The first 48 hours of an enforcement action determine the next two years. A practical guide to staying composed and protected.",
    date: "2026-03-04",
    read: "10 min",
  },
];

// ── Testimonials ────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "TLP read our cap table like a chessboard. They flagged a liquidation-preference trap our last firm missed entirely — and renegotiated it in 48 hours.",
    name: "Founder & CEO",
    company: "Seed-stage Fintech",
  },
  {
    quote:
      "The Codex Triage retainer is the best money we spend. Having senior counsel one message away changed how fast we ship deals.",
    name: "Co-founder",
    company: "Series A SaaS",
  },
  {
    quote:
      "Cross-border into the UAE could have taken months. With TLP's structuring it took weeks, and we never tripped a single FEMA flag.",
    name: "General Partner",
    company: "Early-stage VC Fund",
  },
  {
    quote:
      "When a regulator came knocking, Subeesh's courtroom authority was the difference. Calm, strategic, decisive.",
    name: "Founder",
    company: "Healthcare Platform",
  },
];

// ── Process ─────────────────────────────────────────────
export const PROCESS = [
  { title: "Book Consultation", desc: "A focused first call to understand where you are." },
  { title: "Strategy Session", desc: "We diagnose the real legal picture, not the symptom." },
  { title: "Legal Audit", desc: "A clear-eyed map of risk and opportunity." },
  { title: "Roadmap", desc: "Prioritised, plain-language plan with options." },
  { title: "Execution", desc: "Senior-led delivery, done cleanly." },
  { title: "Growth Partnership", desc: "We stay as your legal backbone." },
];
