import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DATA } from "@/data/resume";

export default function ResultsPage() {
  return (
    <main className="relative left-1/2 w-[94vw] max-w-6xl -translate-x-1/2 space-y-10 pb-16">
      <Link
        href="/#results"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to portfolio
      </Link>

      <header>
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground font-medium">Performance Evidence</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">All Campaign Screenshots</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Complete screenshot archive from previous paid media work. These are kept separate from the case studies until each screenshot is explicitly mapped to the correct case.
        </p>
      </header>

      <section className="grid gap-7">
        {DATA.resultScreenshots.map((image, index) => (
          <article key={image} className="overflow-hidden rounded-xl border bg-card ring-1 ring-border/20">
            <img
              src={image}
              alt={`Performance screenshot ${index + 1}`}
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
            <div className="border-t px-4 py-3">
              <p className="text-sm font-medium">Performance Snapshot {String(index + 1).padStart(2, "0")}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
