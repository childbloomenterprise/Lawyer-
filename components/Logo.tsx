import Link from "next/link";

export default function Logo({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Triage Law Partners — home"
      className="group inline-flex items-center gap-3"
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-[9px] bg-gradient-to-br from-gold-light via-gold to-gold-deep text-ink shadow-[0_0_28px_-6px_rgba(201,162,75,0.8)] transition-all duration-500 ease-luxe group-hover:scale-[1.07] group-hover:shadow-[0_0_36px_-4px_rgba(228,201,126,0.9)]">
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative font-grotesk text-[15px] font-bold tracking-tightest">
          TLP
        </span>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-grotesk text-[17px] font-semibold uppercase tracking-[0.02em] ${
              light ? "text-paper" : "text-ink"
            }`}
          >
            Triage Law Partners
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-kicker text-gold-deep">
            #legaltriage
          </span>
        </span>
      )}
    </Link>
  );
}
