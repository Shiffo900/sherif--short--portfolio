import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const RESULTS = DATA.resultScreenshots;

export default function ResultsSection() {
  return (
    <section id="results" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-5">
        <BlurFade delay={0.04 * 15}>
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">Performance Evidence</p>
            <h2 className="mt-2 text-xl font-bold">Campaign Screenshots</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              All 15 performance screenshots are kept in one standalone evidence section, separate from the case studies.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 16}>
          <div className="results-marquee relative overflow-hidden -mx-2 px-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent" />
            <div className="results-marquee-track flex w-max gap-3 py-2">
              {[...RESULTS, ...RESULTS].map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  aria-hidden={index >= RESULTS.length}
                  className="group block w-[300px] sm:w-[360px] shrink-0 overflow-hidden rounded-xl border bg-card ring-2 ring-border/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="aspect-[16/10] bg-muted/30 overflow-hidden">
                    <img
                      src={image}
                      alt={index < RESULTS.length ? `Campaign performance screenshot ${index + 1}` : ""}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="px-3 py-2.5">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Evidence</p>
                    <span className="text-xs font-medium">Performance Snapshot {String((index % RESULTS.length) + 1).padStart(2, "0")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 17}>
          <Link
            href="/results"
            className="inline-flex w-fit items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            View All Screenshots
            <ArrowRight className="size-4" />
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
