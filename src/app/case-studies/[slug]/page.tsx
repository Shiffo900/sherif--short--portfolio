import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

const caseStudies = {
  "travel-growth": {
    eyebrow: "Travel Growth Case Study",
    title: "From Early Traction to 650 Paying Travelers",
    meta: "Travel & Tourism · Saudi Arabia → Europe · ~2 Years",
    role: "Senior Performance Media Buyer",
    intro:
      "The brand was still early when I joined. The problem was bigger than ad performance: measurement, audience segmentation, offers, landing experiences, and the connection between marketing and sales all needed to improve.",
    metrics: [
      ["Paying Customers", "5 → 650"],
      ["CAC", "$600 → $120"],
      ["Landing CVR", "3% → 10%"],
      ["Cost / Message", "$5 → $2"],
      ["CTR", "1.5% → 2.5%"],
      ["Revenue", "$1.33M"],
    ],
    sections: [
      ["Measurement Foundation", "Rebuilt the customer journey around Ad → Landing Page → WhatsApp → Sales → Booking so optimization could go beyond platform metrics."],
      ["Acquisition Structure", "Organized acquisition around Destination × Persona × Creative Concept × Audience Signal × Funnel, with destination-specific campaign logic."],
      ["Addressable Market", "Used structured sales feedback to identify demand from solo travelers and honeymoon couples in addition to families."],
      ["Landing Experiences", "Built persona-specific pages with reviews, trip details, activities, brand differentiation, policies, trust elements, and clear WhatsApp conversion paths."],
      ["Creative Testing", "Moved from random production to Persona → Pain Point → Angle → Concept → Destination testing and developed winners based on why they worked."],
      ["Funnel Paths", "Tested landing-page-to-WhatsApp, direct calls, and lead-generation paths against downstream sales behavior rather than cheapest lead cost alone."],
      ["Media × Sales", "Connected destination demand, funnel performance, lead quality, and salesperson closing ability to lead routing and budget allocation."],
      ["Follow-Up System", "Tracked objections, follow-up dates, expected buying windows, re-contact timing, and booking status so sales conversations became marketing inputs."],
      ["Offer & Product", "Used competitor and customer research to improve programs, packages, activities, positioning, and destination coverage."],
    ],
    logic: "Market Research → Persona & Destination Strategy → Offer → Creative Testing → Landing Page → Acquisition → Sales Routing → Sales Feedback → New Marketing Decisions",
    note: "The company profile documents the wider growth period at 650 customers, $1.33M revenue, $106K ad spend, and CAC reduced to $120.",
    screenshots: DATA.resultScreenshots.slice(0, 5),
  },
  "travel-performance": {
    eyebrow: "Travel Performance Case Study",
    title: "Scaling From 200–300 Seasonal Trips to 3,500",
    meta: "Travel & Tourism · Europe & International Travel · ~2 Years",
    role: "Senior Performance Media Buyer",
    intro:
      "The business was recovering from a difficult period with low seasonal volume and poorly organized performance data. My job was to make the account readable, testable, and scalable by finding where performance was breaking and what variable needed to be tested next.",
    metrics: [
      ["Peak Annual Volume", "~3,500 trips"],
      ["Trips Sold", "11,000+"],
      ["CAC Improvement", "30%+ reduction"],
      ["Cost / Message", "Up to 60% reduction"],
      ["Revenue", "$33M+"],
      ["Ad Spend", "$2M+"],
    ],
    sections: [
      ["Measurement", "Connected Ad → Landing Page → Lead / WhatsApp → Sales → Booking before pushing scale."],
      ["Account Structure", "Built around Destination → Persona → Creative Concept → Audience → Funnel instead of one generic setup."],
      ["Creative Testing", "Systematically tested Persona × Pain Point × Angle × Offer × Creative Concept and compared performance across media and downstream signals."],
      ["Funnel Reading", "Read CPM → CTR → CPC → Landing CVR → Lead Cost → Lead Quality → Close Rate → CAC to identify the real weakest stage."],
      ["Landing Pages", "Treated landing pages as a media-buying variable and tested destination, persona, package, objections, reviews, details, activities, USPs, and policy content."],
      ["Sales Data", "Read Lead Source → Destination → Sales Rep → Quality → Closing Ability to understand which expensive-looking campaigns were commercially stronger."],
      ["Budget Allocation", "Moved spend based on destination demand, persona response, creative performance, funnel efficiency, lead quality, and closing performance."],
      ["Retargeting", "Used customer data, previous travelers, retargeting pools, WhatsApp retargeting, broad audiences, and interest signals as audience layers."],
      ["Pattern Recognition", "Made decisions through Pattern → Hypothesis → Test → Decision instead of reacting to a single bad day."],
    ],
    logic: "Observation → Pattern → Hypothesis → Test → Decision",
    note: "The wider four-year company journey reports 11,000+ trips sold, $33M+ revenue, $2M+ ad spend, and 30%+ CAC improvement. My direct involvement covered roughly two years.",
    screenshots: DATA.resultScreenshots.slice(5, 10),
  },
  "ecommerce-turnaround": {
    eyebrow: "E-Commerce Performance Turnaround",
    title: "From EGP 175K to EGP 1.2M Monthly Revenue",
    meta: "Baby Products & Strollers · Shopify · Ownership from Nov 2024",
    role: "Senior Performance Media Buyer",
    intro:
      "When I took over, monthly revenue was around EGP 175K and the business was still losing money despite 5–6x platform ROAS. Tracking, website conversion, product structure, retargeting, and funnel design all needed to be rebuilt before scaling.",
    metrics: [
      ["Monthly Revenue", "175K → 1.2M EGP"],
      ["Second Month", "~500K EGP"],
      ["Cost / Purchase", "500–600 → ~150 EGP"],
      ["Website CVR", "~2.5%"],
    ],
    sections: [
      ["Tracking First", "Rebuilt the tracking setup before making major media decisions so Ads → Shopify → Purchase could be trusted."],
      ["Website Replacement", "Moved the brand to an improved Shopify experience and rebuilt product discovery and conversion paths."],
      ["Creative Strategy", "Rebuilt creative testing around Product → Category → Price Point → Set → Customer Intent."],
      ["Account Structure", "Segmented products by price range, category, sets, purchase intent, and product performance with cleaner exclusions."],
      ["Catalog Campaigns", "Structured product groups around commercial logic and pushed categories, price ranges, sets, best-performing SKUs, and lower-ticket products."],
      ["Bid Cap", "Introduced Bid Cap after understanding normal CPA ranges and product behavior to control acquisition cost while scaling proven structures."],
      ["Retargeting", "Separated Prospecting → Product Interest → Retargeting → Purchase and used product relevance rather than generic repeat exposure."],
      ["Website vs Messages", "Supported both direct Shopify purchases and message-assisted sales for customers who needed conversation before higher-value purchases."],
      ["Small Product Scaling", "Allocated media toward lower-ticket products to generate faster conversion, stronger purchase signals, more volume, and incremental revenue."],
    ],
    logic: "Spend → CPM → CTR → CPC → Website CVR → CPA → Product → Revenue",
    note: "Revenue moved from roughly EGP 175K to about EGP 500K in the second month and later reached approximately EGP 1.2M, while cost per purchase fell to around EGP 150.",
    screenshots: DATA.resultScreenshots.slice(10, 15),
  },
} as const;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];
  if (!study) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl space-y-12 pb-16">
      <Link href="/#case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft className="size-4" /> Back to portfolio
      </Link>

      <header className="space-y-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">{study.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{study.title}</h1>
        </div>
        <p className="text-sm text-muted-foreground">{study.role} · {study.meta}</p>
        <p className="text-base leading-relaxed text-muted-foreground">{study.intro}</p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {study.metrics.map(([label, value]) => (
            <div key={label} className="rounded-xl border bg-card p-3 ring-1 ring-border/20">
              <p className="text-lg font-semibold tracking-tight">{value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">How I worked it</p>
        <div className="grid gap-3">
          {study.sections.map(([title, body], index) => (
            <article key={title} className="rounded-xl border bg-card p-4 ring-1 ring-border/20">
              <div className="flex gap-3">
                <span className="mt-0.5 font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-semibold">{title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border bg-muted/20 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operating Logic</p>
        <p className="mt-2 text-sm font-medium leading-relaxed">{study.logic}</p>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">Selected Performance Evidence</p>
          <p className="mt-1 text-sm text-muted-foreground">Screenshots from the portfolio evidence archive, displayed here without leaving the short portfolio.</p>
        </div>
        <div className="grid gap-3">
          {study.screenshots.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-xl border bg-card ring-1 ring-border/20">
              <img src={image} alt={`Selected performance evidence ${index + 1}`} className="h-auto w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border p-4 text-xs leading-relaxed text-muted-foreground">
        {study.note}
      </section>

      <Link href="/#case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-primary">
        Back to selected case studies <ArrowUpRight className="size-4" />
      </Link>
    </main>
  );
}
