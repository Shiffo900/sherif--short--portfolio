import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export default function ResultsSection() {
  return (
    <section id="results" className="overflow-hidden">
      <div className="group relative flex min-h-0 flex-col gap-y-5 overflow-hidden rounded-2xl border bg-card p-5 sm:p-6 transition-all duration-300 hover:border-foreground/15 hover:shadow-[0_20px_60px_-40px_rgba(0,0,0,.5)]">
        <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-gradient-to-br from-sky-400/15 via-violet-400/10 to-transparent blur-2xl transition-transform duration-700 group-hover:scale-125" />
        <BlurFade delay={0.04 * 15}>
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">Proof</p>
            <h2 className="mt-2 text-xl font-bold">Performance Evidence</h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-foreground/65">
              Open the full portfolio to review protected campaign screenshots and the evidence behind the case studies.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 17}>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">4 documented cases</span>
            <span className="rounded-full border bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Protected campaign proof</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 18}>
          <Link
            href="https://sherifseniormediabuyer-shiffo900s-projects.vercel.app/#results"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Performance Evidence
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
