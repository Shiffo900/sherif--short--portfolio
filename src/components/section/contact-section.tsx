import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-8 sm:p-10 relative overflow-hidden">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>

      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let&apos;s Talk Performance
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Open to senior performance marketing opportunities, growth-focused teams, and roles where paid media, experimentation, measurement, and automation work together.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Email Me
          </Link>
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
