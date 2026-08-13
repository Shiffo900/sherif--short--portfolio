import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-10 -top-14 h-56 w-72 opacity-35">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={3}
          style={{
            maskImage:
              "radial-gradient(circle at top right, black 0%, rgba(0,0,0,.75) 34%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at top right, black 0%, rgba(0,0,0,.75) 34%, transparent 72%)",
          }}
        />
      </div>

      <div className="relative grid gap-7 sm:grid-cols-[1.35fr_.85fr] sm:items-end">
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-muted-foreground">
            Contact
          </p>

          <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
            Open to the right performance opportunity.
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            I&apos;m open to senior performance marketing roles where paid media,
            structured experimentation, measurement, and automation work together
            to drive business growth.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >
              <Mail className="size-4" />
              Email Me
            </Link>

            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border bg-background px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted"
            >
              <Linkedin className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-3.5 text-muted-foreground" />
            </Link>
          </div>
        </div>

        <div className="border-t pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Quick Info
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2.5">
              <BriefcaseBusiness className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Senior Performance Media Buyer</p>
                <p className="text-xs text-muted-foreground">Performance & growth roles</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-muted-foreground" />
              <span>{DATA.location}</span>
            </div>

            <Link
              href={`mailto:${DATA.contact.email}`}
              className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4 shrink-0" />
              <span className="truncate text-xs">{DATA.contact.email}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
