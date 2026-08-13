import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-5 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-3 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="text-foreground max-w-[620px] text-base md:text-lg font-medium"
                delay={BLUR_FADE_DELAY * 2}
                text="Senior Performance Media Buyer"
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[620px] text-sm md:text-base"
                delay={BLUR_FADE_DELAY * 3}
                text="Paid Media Strategy · Structured Experimentation · Full-Funnel Optimization"
              />

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
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
            </div>

            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarFallback className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Professional Summary</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Professional Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Core Expertise</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 8 + id * 0.035}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl min-h-8 w-fit px-3.5 py-1.5 flex items-center gap-2">
                  <skill.icon className="size-4 text-muted-foreground" />
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="systems">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Performance Systems & AI Applications</h2>
          </BlurFade>
          <div className="grid sm:grid-cols-2 gap-3">
            {DATA.systems.map((system, index) => (
              <BlurFade key={system.title} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
                <div className="h-full rounded-xl border bg-card p-4 ring-2 ring-border/20">
                  <h3 className="font-semibold text-sm">{system.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{system.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="tools">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Platforms & Tools</h2>
          </BlurFade>
          <div className="flex flex-col gap-5">
            {DATA.toolGroups.map((group, index) => (
              <BlurFade key={group.label} delay={BLUR_FADE_DELAY * 12 + index * 0.05}>
                <div className="grid gap-2 sm:grid-cols-[150px_1fr]">
                  <p className="text-sm font-semibold">{group.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-lg border bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="markets">
        <div className="grid sm:grid-cols-2 gap-8">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">Markets</h2>
              <div className="flex flex-wrap gap-1.5">
                {DATA.markets.map((market) => (
                  <span key={market} className="rounded-lg border px-2.5 py-1 text-xs text-muted-foreground">{market}</span>
                ))}
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">Industries</h2>
              <div className="flex flex-wrap gap-1.5">
                {DATA.industries.map((industry) => (
                  <span key={industry} className="rounded-lg border px-2.5 py-1 text-xs text-muted-foreground">{industry}</span>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">Education & Additional Information</h2>
          </BlurFade>

          {DATA.education.map((education) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 16}>
              <Link
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-3 justify-between group"
              >
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <div className="size-9 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center text-xs font-semibold">BS</div>
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {education.school}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                  </div>
                </div>
                <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                  {education.end}
                </div>
              </Link>
            </BlurFade>
          ))}

          <div className="grid sm:grid-cols-2 gap-2 pt-1">
            {DATA.additional.map((item, index) => (
              <BlurFade key={item.label} delay={BLUR_FADE_DELAY * 17 + index * 0.04}>
                <div className="rounded-xl border p-3">
                  <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-sm font-medium">{item.value}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
