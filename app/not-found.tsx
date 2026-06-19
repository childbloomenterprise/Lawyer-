import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/15 blur-[150px]" />
      <div className="container-x relative text-center">
        <p className="font-grotesk text-[7rem] font-black leading-none text-gold-gradient md:text-[12rem]">
          404
        </p>
        <h1 className="mt-2 font-grotesk text-3xl font-semibold tracking-tight md:text-4xl">
          This page took a different path.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-paper/55">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back on track.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
