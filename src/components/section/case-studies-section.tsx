"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

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
    overview:
      "The business needed more than cheaper leads. I connected media buying with measurement, persona and destination strategy, landing pages, WhatsApp, sales routing, follow-up, and offer development so acquisition decisions reflected how the business actually sold.",
    approach: [
      "Rebuilt measurement around Ad → Landing Page → WhatsApp → Sales → Booking.",
      "Structured acquisition by Destination × Persona × Creative Concept × Audience Signal × Funnel.",
      "Used sales conversations to identify additional personas such as solo travelers and honeymoon couples.",
      "Built persona-specific landing experiences and improved landing-page conversion from 3% to 10%.",
      "Connected destination demand, lead quality, and salesperson closing ability to routing and budget decisions.",
      "Turned recurring objections into inputs for creatives, offers, landing pages, and package positioning.",
    ],
    logic:
      "Market Research → Persona & Destination → Offer → Creative → Landing Page → Acquisition → Sales Routing → Sales Feedback → New Marketing Decisions",
    note:
      "The broader company profile documents 650 customers, $1.33M revenue, $106K ad spend, and CAC reduced to $120 across the growth period.",
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
    overview:
      "The account needed to become readable, testable, and scalable. I focused on understanding where performance was breaking, why it was breaking, and which variable should be tested next instead of optimizing around cheap leads alone.",
    approach: [
      "Cleaned measurement and connected media performance with sales and booking outcomes.",
      "Rebuilt campaigns around Destination → Persona → Creative Concept → Audience → Funnel.",
      "Ran structured creative tests across persona, pain point, angle, offer, and concept.",
      "Read the full chain: CPM → CTR → CPC → Landing CVR → Lead Cost → Lead Quality → Close Rate → CAC.",
      "Used sales-rep and destination-level closing data to interpret lead quality and allocate budget.",
      "Made decisions through Pattern → Hypothesis → Test → Decision rather than reacting to single-day movement.",
    ],
    logic: "Observation → Pattern → Hypothesis → Test → Decision",
    note:
      "The wider four-year company journey reports 11,000+ trips sold, $33M+ revenue, $2M+ ad spend, and 30%+ CAC improvement. My direct involvement covered roughly two years.",
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
    overview:
      "The account showed acceptable platform ROAS but the business was still losing money. I rebuilt the performance foundation first, then scaled through better measurement, a stronger Shopify experience, product-level segmentation, catalog logic, bidding, and retargeting.",
    approach: [
      "Rebuilt tracking before making major media decisions.",
      "Replaced the underperforming website with an improved Shopify buying experience.",
      "Rebuilt creative strategy around Product → Category → Price Point → Set → Customer Intent.",
      "Segmented product advertising by price, category, sets, purchase intent, and SKU performance.",
      "Used catalog campaigns, Bid Cap, structured retargeting, and cleaner exclusions to control scale.",
      "Separated Shopify purchases from message-assisted sales and actively scaled lower-ticket products for incremental revenue.",
    ],
    logic: "Spend → CPM → CTR → CPC → Website CVR → CPA → Product → Revenue",
    note:
      "Monthly revenue moved from roughly EGP 175K to EGP 500K in the second month and later reached approximately EGP 1.2M, while cost per purchase fell to around EGP 150.",
  },
] as const;

export default function CaseStudiesSection() {
  return (
    <div className="mt-12 border-t pt-10">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">Selected Case Studies</p>
        <h2 className="mt-2 text-xl font-bold">Performance Work, Condensed</h2>
        <p className="mt-1 text-sm text-muted-foreground">Three cases showing how I diagnose, test, connect funnel signals, and scale.</p>
      </div>

      <div className="grid gap-3">
        {cases.map((study) => (
          <details key={study.id} className="group rounded-xl border bg-card ring-1 ring-border/20 transition-all duration-200 open:shadow-sm">
            <summary className="cursor-pointer list-none p-4 [&::-webkit-details-marker]:hidden">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="font-mono text-primary">Case {study.id}</span><span>·</span><span>{study.eyebrow}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold leading-snug sm:text-lg">{study.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{study.role} · {study.meta}</p>
                </div>
                <ChevronDown className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border bg-background/70 px-2.5 py-2">
                    <p className="text-sm font-semibold tracking-tight">{metric.value}</p>
                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </summary>

            <div className="border-t px-4 pb-4 pt-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{study.overview}</p>
              <div className="mt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">How I worked it</p>
                <ul className="mt-2 grid gap-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {study.approach.map((item) => (
                    <li key={item} className="flex gap-2.5"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 rounded-lg border bg-muted/20 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operating Logic</p>
                <p className="mt-1.5 text-xs font-medium leading-relaxed sm:text-sm">{study.logic}</p>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{study.note}</p>
              <Link href={study.href} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-primary">
                Read full case study <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
