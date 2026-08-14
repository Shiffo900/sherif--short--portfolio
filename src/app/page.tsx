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
import { ArrowUpRight, Download, GraduationCap, Languages, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;
const ADDITIONAL_ICONS = [ShieldCheck, Languages, Languages] as const;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 sm:gap-16 relative">
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

              <BlurFade delay={BLUR_FADE_DELAY * 2} inView={false}>
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">{DATA.name}</h1>
              </BlurFade>

              <BlurFadeText
                className="text-foreground max-w-[620px] text-lg md:text-xl font-medium leading-snug"
                delay={BLUR_FADE_DELAY * 3}
                text="I work the platform. I live in the numbers. I catch the patterns — then turn them into the next test."
              />

              <BlurFadeText
                className="text-muted-foreground max-w-[620px] text-sm md:text-base"
                delay={BLUR_FADE_DELAY * 4}
                text="Strategy · Experimentation · Measurement · Execution"
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
                  <a href="/Sherif-Saad-Sofiu-CV.pdf" download className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <Download className="size-4" /> Download CV
                  </a>
                  <a href="https://sherifseniormediabuyer-shiffo900s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-2 rounded-lg border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:shadow-md">
                    View Full Portfolio
                    <ArrowUpRight className="size-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
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
          <BlurFade delay={BLUR_FADE_DELAY * 8}><div><p className="text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground">About</p><h2 className="mt-2 text-xl font-bold">Professional Summary</h2></div></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}><div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"><Markdown>{DATA.summary}</Markdown></div></BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}><div><p className="text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground">Career</p><h2 className="mt-2 text-xl font-bold">Professional Experience</h2></div></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}><WorkSection /></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}><CaseStudiesSection /></BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 13}><div><p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">Core Expertise</p><h2 className="mt-2 text-xl font-bold">What I&apos;m Good At</h2></div></BlurFade>
          <div className="grid gap-2 sm:grid-cols-2">
            {DATA.skills.map((skill, id) => (<BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 14 + id * 0.025}><div className="group flex min-h-14 items-center gap-3 rounded-xl border bg-card px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-sm"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted/60 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-foreground group-hover:text-background"><skill.icon className="size-4 transition-transform duration-300 group-hover:-rotate-6" /></span><span className="text-sm font-medium leading-snug text-foreground/85">{skill.name}</span></div></BlurFade>))}
          </div>
        </div>
      </section>

      <section id="brands">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 15}><div><p className="text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground">Selected Clients</p><h2 className="mt-2 text-xl font-bold">Brands I&apos;ve Worked On</h2><p className="mt-1 text-sm text-muted-foreground">Selected brands across travel, e-commerce, education and app growth.</p></div></BlurFade>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {DATA.brands.map((brand, index) => (<BlurFade key={brand.name} delay={BLUR_FADE_DELAY * 16 + index * 0.025} className={index === DATA.brands.length - 1 ? "col-span-2 w-[calc(50%_-_4px)] justify-self-center sm:col-span-1 sm:w-auto sm:justify-self-stretch" : undefined}><div className="group flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md dark:bg-white"><img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" className={`max-h-10 max-w-[104px] object-contain saturate-110 transition-transform duration-300 group-hover:scale-105 ${brand.name === "Modrk" ? "scale-110 contrast-150" : "contrast-125"}`} /><span className="text-[10px] font-medium text-neutral-600">{brand.name}</span></div></BlurFade>))}
          </div>
        </div>
      </section>

      <ResultsSection />

      <section id="markets">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 19}><div><p className="text-xs uppercase tracking-[0.26em] text-muted-foreground font-medium">Experience Footprint</p><h2 className="mt-2 text-xl font-bold">Markets &amp; Industries</h2></div></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <div className="h-full rounded-2xl border bg-card p-4"><p className="text-sm font-semibold">Markets</p><div className="mt-3 flex flex-wrap gap-1.5">{DATA.markets.map((market) => <span key={market} className="rounded-full border bg-background px-2.5 py-1 text-[11px] text-foreground/70 transition-colors hover:border-foreground/20 hover:text-foreground">{market}</span>)}</div></div>
              </div>
              <div>
                <div className="h-full rounded-2xl border bg-card p-4"><p className="text-sm font-semibold">Industries</p><div className="mt-3 flex flex-wrap gap-1.5">{DATA.industries.map((industry) => <span key={industry} className="rounded-full border bg-background px-2.5 py-1 text-[11px] text-foreground/70 transition-colors hover:border-foreground/20 hover:text-foreground">{industry}</span>)}</div></div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="education"><div className="flex min-h-0 flex-col gap-y-5"><BlurFade delay={BLUR_FADE_DELAY * 25}><div><p className="text-xs font-medium uppercase tracking-[0.26em] text-muted-foreground">Credentials</p><h2 className="mt-2 text-xl font-bold">Education & Additional Information</h2></div></BlurFade>{DATA.education.map((education) => (<BlurFade key={education.school} delay={BLUR_FADE_DELAY * 26}><Link href={education.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 justify-between rounded-xl border p-3 group transition-colors hover:bg-muted/30"><div className="flex items-center gap-x-3 flex-1 min-w-0"><div className="grid size-9 flex-none place-items-center rounded-lg border bg-muted"><GraduationCap className="size-4" /></div><div className="flex-1 min-w-0 flex flex-col gap-0.5"><div className="font-semibold leading-none flex items-center gap-2">{education.school}<ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" /></div><div className="font-sans text-sm text-muted-foreground">{education.degree}</div></div></div><div className="text-xs tabular-nums text-muted-foreground text-right flex-none">{education.end}</div></Link></BlurFade>))}<div className="grid gap-2">{DATA.additional.map((item, index) => { const ItemIcon = ADDITIONAL_ICONS[index] ?? ShieldCheck; return (<BlurFade key={item.label} delay={BLUR_FADE_DELAY * 27 + index * 0.04}><div className="flex items-center gap-3 rounded-xl border p-3 transition-colors duration-200 hover:bg-muted/30"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted"><ItemIcon className="size-4" /></span><div><p className="text-xs font-medium text-muted-foreground">{item.label}</p><p className="mt-1 text-sm font-medium">{item.value}</p></div></div></BlurFade>)})}</div></div></section>

      <section id="contact"><BlurFade delay={BLUR_FADE_DELAY * 28}><ContactSection /></BlurFade></section>
    </main>
  );
}
