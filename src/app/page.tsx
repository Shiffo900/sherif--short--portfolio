import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import WorkSection from "@/components/section/work-section";
import CaseStudiesSection from "@/components/section/case-studies-section";
import ResultsSection from "@/components/section/results-section";
import { ArrowUpRight, Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-5 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-3 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground font-medium">
                  <span className="size-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
                  Senior Performance Media Buyer
                </div>
              </BlurFade>

              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={DATA.name}
              />

              <BlurFadeText
                className="text-foreground max-w-[620px] text-lg md:text-xl font-medium leading-snug"
                delay={BLUR_FADE_DELAY * 3}
                text="I work the platform. I live in the numbers. I catch the patterns — then turn them into the next test."
              />

              <BlurFadeText
                className="text-muted-foreground max-w-[620px] text-sm md:text-base"
                delay={BLUR_FADE_DELAY * 4}
                text="Paid Media Strategy · Structured Experimentation · Full-Funnel Optimization · Performance Systems"
              />

              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <a href={DATA.locationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                    <MapPin className="size-3.5" /> {DATA.location}
                  </a>
                  <a href={`mailto:${DATA.contact.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                    <Mail className="size-3.5" /> {DATA.contact.email}
                  </a>
                  <a href={`tel:${DATA.contact.tel}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                    <Phone className="size-3.5" /> +20 109 461 0691
                  </a>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a href="/Sherif-Saad-Sofiu-CV.pdf" download className="group inline-flex items-center gap-2 rounded-xl border border-violet-400/30 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(124,58,237,.65)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_rgba(124,58,237,.8)]">
                    <Download className="size-4" /> Download CV
                  </a>
                  <a href="https://charm-component-cloud.vercel.app" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-sky-400/25 bg-sky-500/10 px-4 py-2.5 text-sm font-semibold text-sky-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-500/15 dark:text-sky-300">
                    <ExternalLink className="size-4" /> Full Portfolio
                    <ArrowUpRight className="size-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <div className="mt-3 flex flex-wrap gap-2">
                  {DATA.channels.map((channel) => (
                    <div key={channel.name} className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
                      <span className="flex size-5 items-center justify-center rounded-full bg-white ring-1 ring-black/5">
                        <img src={channel.icon} alt="" className="size-3.5 object-contain" />
                      </span>
                      {channel.name}
                    </div>
                  ))}
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted transition-transform duration-300 hover:scale-[1.02]">
                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} className="object-cover" />
                <AvatarFallback className="text-2xl md:text-3xl font-semibold tracking-tight">{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 8}><h2 className="text-xl font-bold">Professional Summary</h2></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}><div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"><Markdown>{DATA.summary}</Markdown></div></BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}><h2 className="text-xl font-bold">Professional Experience</h2></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}><WorkSection /></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}><CaseStudiesSection /></BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 13}><p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">What I&apos;m Good At</p></BlurFade>
          <div className="flex flex-wrap gap-2.5">
            {DATA.skills.map((skill, id) => (<BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 14 + id * 0.025}><div className="border bg-background border-border ring-2 ring-border/20 rounded-full min-h-9 w-fit px-4 py-2 flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:ring-border/40"><skill.icon className="size-4 text-muted-foreground" /><span className="text-foreground text-sm font-medium">{skill.name}</span></div></BlurFade>))}
          </div>
        </div>
      </section>

      <section id="brands" className="overflow-hidden">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 15}><div><h2 className="text-xl font-bold">Brands I&apos;ve Worked On</h2><p className="mt-1 text-sm text-muted-foreground">Selected brands across travel, e-commerce, education and app growth.</p></div></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="brand-marquee relative overflow-hidden -mx-2 px-2"><div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent" /><div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent" /><div className="brand-marquee-track flex w-max gap-3 py-2">{[...DATA.brands, ...DATA.brands].map((brand, index) => (<div key={`${brand.name}-${index}`} aria-hidden={index >= DATA.brands.length} className="group flex h-24 w-36 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border bg-white p-4 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"><img src={brand.logo} alt={index < DATA.brands.length ? `${brand.name} logo` : ""} loading="lazy" className="max-h-10 max-w-[105px] object-contain transition-transform duration-300 group-hover:scale-[1.04]" /><span className="text-[10px] font-medium text-neutral-500">{brand.name}</span></div>))}</div></div>
          </BlurFade>
        </div>
      </section>

      <ResultsSection />

      <section id="systems"><div className="flex min-h-0 flex-col gap-y-4"><BlurFade delay={BLUR_FADE_DELAY * 19}><p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">Beyond Ad Managers</p><h2 className="mt-2 text-xl font-bold">Performance Systems & AI Applications</h2></BlurFade><div className="flex flex-col gap-2">{DATA.systems.map((system, index) => (<BlurFade key={system.title} delay={BLUR_FADE_DELAY * 20 + index * 0.04}><div className="rounded-xl border bg-card px-3.5 py-3 ring-1 ring-border/20 transition-all duration-200 hover:bg-muted/20"><div className="flex items-start gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-background text-[11px] font-mono font-semibold text-muted-foreground">0{index + 1}</span><div className="min-w-0"><h3 className="font-semibold text-sm">{system.title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{system.description}</p></div></div></div></BlurFade>))}</div></div></section>

      <section id="tools"><div className="flex min-h-0 flex-col gap-y-5"><BlurFade delay={BLUR_FADE_DELAY * 21}><h2 className="text-xl font-bold">Platforms & Tools</h2></BlurFade><div className="flex flex-col gap-5">{DATA.toolGroups.map((group, index) => (<BlurFade key={group.label} delay={BLUR_FADE_DELAY * 22 + index * 0.05}><div className="grid gap-2 sm:grid-cols-[150px_1fr]"><p className="text-sm font-semibold">{group.label}</p><div className="flex flex-wrap gap-1.5">{group.items.map((item) => (<span key={item.name} className="rounded-lg border bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground inline-flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/60 hover:text-foreground">{item.icon ? (<span className="flex size-5 items-center justify-center rounded-md bg-white ring-1 ring-black/5"><img src={item.icon} alt="" className="size-3.5 object-contain" /></span>) : null}{item.name}</span>))}</div></div></BlurFade>))}</div></div></section>

      <section id="markets"><div className="grid sm:grid-cols-2 gap-8"><BlurFade delay={BLUR_FADE_DELAY * 23}><div className="flex flex-col gap-3"><h2 className="text-xl font-bold">Markets</h2><div className="flex flex-wrap gap-1.5">{DATA.markets.map((market) => (<span key={market} className="rounded-lg border px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:bg-muted/40 hover:text-foreground">{market}</span>))}</div></div></BlurFade><BlurFade delay={BLUR_FADE_DELAY * 24}><div className="flex flex-col gap-3"><h2 className="text-xl font-bold">Industries</h2><div className="flex flex-wrap gap-1.5">{DATA.industries.map((industry) => (<span key={industry} className="rounded-lg border px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:bg-muted/40 hover:text-foreground">{industry}</span>))}</div></div></BlurFade></div></section>

      <section id="education"><div className="flex min-h-0 flex-col gap-y-6"><BlurFade delay={BLUR_FADE_DELAY * 25}><h2 className="text-xl font-bold">Education & Additional Information</h2></BlurFade>{DATA.education.map((education) => (<BlurFade key={education.school} delay={BLUR_FADE_DELAY * 26}><Link href={education.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 justify-between group"><div className="flex items-center gap-x-3 flex-1 min-w-0"><div className="size-9 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center text-xs font-semibold">BS</div><div className="flex-1 min-w-0 flex flex-col gap-0.5"><div className="font-semibold leading-none flex items-center gap-2">{education.school}<ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" /></div><div className="font-sans text-sm text-muted-foreground">{education.degree}</div></div></div><div className="text-xs tabular-nums text-muted-foreground text-right flex-none">{education.end}</div></Link></BlurFade>))}<div className="grid sm:grid-cols-2 gap-2 pt-1">{DATA.additional.map((item, index) => (<BlurFade key={item.label} delay={BLUR_FADE_DELAY * 27 + index * 0.04}><div className="rounded-xl border p-3 transition-colors duration-200 hover:bg-muted/30"><p className="text-xs font-medium text-muted-foreground">{item.label}</p><p className="mt-1 text-sm font-medium">{item.value}</p></div></BlurFade>))}</div></div></section>

      <section id="contact"><BlurFade delay={BLUR_FADE_DELAY * 28}><ContactSection /></BlurFade></section>
    </main>
  );
}
