"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";

const cases = [
  {
    id: "01",
    eyebrow: "Travel Growth",
    title: "From Early Traction to 650 Paying Travelers",
    role: "Senior Performance Media Buyer",
    meta: "Saudi Arabia → Europe · ~2 years",
    href: "/case-studies/travel-growth",
    metrics: [
      { label: "Paying Travelers", value: "5 → 650" },
      { label: "CAC", value: "$600 → $120" },
      { label: "Landing CVR", value: "3% → 10%" },
      { label: "Cost / Message", value: "$5 → $2" },
    ],
  },
  {
    id: "02",
    eyebrow: "Travel Performance",
    title: "Scaling From 200–300 Seasonal Trips to 3,500",
    role: "Senior Performance Media Buyer",
    meta: "Europe & International Travel · ~2 years involvement",
    href: "/case-studies/travel-performance",
    metrics: [
      { label: "Peak Annual Volume", value: "~3,500" },
      { label: "Trips Sold", value: "11,000+" },
      { label: "CAC Improvement", value: "30%+ ↓" },
      { label: "Cost / Message", value: "Up to 60% ↓" },
    ],
  },
  {
    id: "03",
    eyebrow: "E-Commerce Turnaround",
    title: "From EGP 175K to EGP 1.2M Monthly Revenue",
    role: "Senior Performance Media Buyer",
    meta: "Baby Products & Strollers · Shopify · ownership from Nov 2024",
    href: "/case-studies/ecommerce-turnaround",
    metrics: [
      { label: "Monthly Revenue", value: "175K → 1.2M" },
      { label: "Cost / Purchase", value: "500–600 → ~150" },
      { label: "Website CVR", value: "~2.5%" },
      { label: "Second Month", value: "~EGP 500K" },
    ],
  },
  {
    id: "04",
    eyebrow: "Meta Account Stabilization",
    title: "8,000 Leads & $100K New-Customer Revenue in 6 Weeks",
    role: "Senior Performance Media Buyer",
    meta: "Online Education · North Africa, GCC, Asia & Europe · ~6 weeks",
    href: "/case-studies/education-stabilization",
    metrics: [
      { label: "Leads", value: "8,000" },
      { label: "Meta Ad Spend", value: "EGP 270K" },
      { label: "Blended CPL", value: "~EGP 34" },
      { label: "New-Customer Revenue", value: "$100K" },
    ],
  },
] as const;

export default function CaseStudiesSection() {
  const moveSpotlight = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div id="case-studies" className="mt-12 border-t pt-10">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">Selected Case Studies</p>
        <h2 className="mt-2 text-xl font-bold">Performance Work, Condensed</h2>
        <p className="mt-1 text-sm text-muted-foreground">Four selected cases. Open any case for the full breakdown.</p>
      </div>

      <div className="grid gap-3">
        {cases.map((study) => (
          <article key={study.id} onMouseMove={moveSpotlight} className="case-spotlight group relative overflow-hidden rounded-2xl border bg-card p-4 sm:p-5 ring-1 ring-border/20 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_18px_50px_-32px_rgba(0,0,0,.45)]">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(260px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),color-mix(in_oklab,var(--foreground)_7%,transparent),transparent_72%)]" />
            <div className="absolute inset-y-5 left-0 w-0.5 rounded-full bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/70" />
            <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="font-mono text-primary">Case {study.id}</span>
              <span>·</span>
              <span>{study.eyebrow}</span>
            </div>

            <h3 className="mt-2 text-base font-semibold leading-snug sm:text-lg">{study.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{study.role} · {study.meta}</p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border bg-background/70 px-2.5 py-2.5 transition-all duration-300 group-hover:border-foreground/10 group-hover:bg-muted/25">
                  <p className="text-sm font-semibold tracking-tight">{metric.value}</p>
                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>

            <Link href={study.href} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-foreground">
              View Case Study <span className="grid size-6 place-items-center rounded-full border bg-background transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-foreground group-hover:text-background"><ArrowUpRight className="size-3.5" /></span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
