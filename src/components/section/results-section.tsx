import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export default function ResultsSection() {
  return (
    <section id="results" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-4 rounded-2xl border bg-card p-5 sm:p-6">
        <BlurFade delay={0.04 * 15}>
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">Performance Evidence</p>
            <h2 className="mt-2 text-xl font-bold">Performance Evidence</h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-foreground/65">
              Open the full portfolio to review protected campaign screenshots and the evidence behind the case studies.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 17}>
          <Link
            href="https://sherifseniormediabuyer-shiffo900s-projects.vercel.app/#results"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            View Performance Evidence
            <ArrowUpRight className="size-4" />
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
