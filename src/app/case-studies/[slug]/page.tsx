import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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
  },
  "education-stabilization": {
    eyebrow: "Meta Ads Account Stabilization",
    title: "8,000 Leads & $100K New-Customer Revenue in 6 Weeks",
    meta: "Online Education · 4-Year Islamic Studies Program · Meta Ads · ~6 Weeks",
    role: "Senior Performance Media Buyer",
    intro:
      "The account had enough historical data and creative volume, but performance was highly unstable across North Africa, GCC, Asia, and Europe. My job was to make the account readable, controllable, and scalable while connecting lead cost with actual student revenue.",
    metrics: [
      ["Meta Ad Spend", "EGP 270K"],
      ["Leads Generated", "8,000"],
      ["Blended CPL", "~EGP 34"],
      ["New-Customer Revenue", "$100K"],
      ["Market CPL Targets", "~EGP 50–250"],
      ["High-CPL Markets", "Up to EGP 700"],
    ],
    sections: [
      ["Country Economics", "Stopped treating every country the same. Evaluated Country → Spend → CPL → Lead-to-Paid CVR → AOV → Revenue and set market-specific acceptable acquisition ranges."],
      ["ABO Testing", "Used ABO as the controlled testing environment for creatives, concepts, markets, messages, and audience signals without immediately disturbing scaling campaigns."],
      ["CBO Scaling", "Moved combinations into CBO only after they showed enough repeatability in testing, then monitored whether efficiency survived higher spend."],
      ["Bidding", "Tested bidding strategies after proven combinations survived the CBO layer, using bidding as another level of cost control and scale rather than the first move."],
      ["Creative Groups", "Reorganized a large creative library into groups of roughly 5–6 ads designed for meaningful diversity across messages, angles, visuals, awareness, motivations, and funnel stages."],
      ["Market Volatility", "Used stability itself as a signal. Stable markets followed Validate → Increase Budget → Observe → Scale Again, while volatile markets required fewer variables and a re-established baseline before scaling."],
      ["Lead-to-Paid", "Optimized beyond CPL because some leads paid directly through automated email while others converted after WhatsApp or email follow-up. Lead-to-Paid CVR became a key market comparison signal."],
      ["Economics-Based Scaling", "Allocated budget through the relationship between CPL × Lead-to-Paid CVR × AOV, allowing more expensive leads when downstream conversion and student value justified the cost."],
    ],
    logic: "Country Economics → ABO Testing → Creative Group Validation → CBO Scaling → Bidding → Lead-to-Paid Analysis → Market-Specific Scaling",
    note: "Within approximately six weeks, roughly EGP 270K in Meta spend generated 8,000 leads, producing a blended CPL of about EGP 34 and $100K in revenue from new students acquired during the same period. Future annual renewals are excluded.",
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

      <section className="rounded-xl border p-4 text-xs leading-relaxed text-muted-foreground">
        {study.note}
      </section>

      <Link href="/#case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-primary">
        Back to selected case studies <ArrowUpRight className="size-4" />
      </Link>
    </main>
  );
}
