"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, FolderKanban, Home, Mail, Sparkles } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const sectionLinks = [
  { id: "hero", label: "Home", icon: Home },
  { id: "work", label: "Experience", icon: BriefcaseBusiness },
  { id: "case-studies", label: "Case Studies", icon: FolderKanban },
  { id: "skills", label: "Expertise", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

const dockIconClass = "liquid-dock-icon rounded-full cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-all duration-300";

function DockTip({ label, children }: { label: string; children: ReactNode }) {
  return <Tooltip><TooltipTrigger asChild>{children}</TooltipTrigger><TooltipContent side="top" sideOffset={8} className="liquid-tooltip rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground"><p>{label}</p><TooltipArrow className="fill-primary" /></TooltipContent></Tooltip>;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = sectionLinks.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.15, 0.4] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-30 sm:bottom-4">
      <Dock magnification={54} className="liquid-dock pointer-events-auto relative z-50 mx-auto flex h-12 w-fit gap-1 rounded-full border bg-card/90 p-1.5 shadow-[0_10px_30px_-15px_rgba(0,0,0,.28)] backdrop-blur-3xl sm:h-14 sm:gap-2 sm:p-2">
        {sectionLinks.map((item) => <DockTip key={item.id} label={item.label}><a href={`/#${item.id}`} aria-label={item.label} aria-current={activeSection === item.id ? "location" : undefined}><DockIcon className={cn(dockIconClass, activeSection === item.id && "border-foreground/20 bg-foreground text-background shadow-sm hover:bg-foreground hover:text-background")}><item.icon className="size-full" /></DockIcon></a></DockTip>)}

        <Separator orientation="vertical" className="m-auto h-2/3 w-px bg-border" />

        {Object.entries(DATA.contact.social).filter(([_, social]) => social.navbar).map(([name, social]) => {
          const Icon = social.icon;
          return <DockTip key={name} label={name}><a href={social.url} target={social.url.startsWith("http") ? "_blank" : undefined} rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={name} className={name === "Email" ? "hidden sm:block" : undefined}><DockIcon className={dockIconClass}><Icon className="size-full" /></DockIcon></a></DockTip>;
        })}

        <DockTip label="Full Portfolio"><a href="https://sherifseniormediabuyer-shiffo900s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Full Portfolio" className="hidden sm:block"><DockIcon className={dockIconClass}><BriefcaseBusiness className="size-full" /></DockIcon></a></DockTip>
        <Separator orientation="vertical" className="m-auto h-2/3 w-px bg-border" />
        <DockTip label="Theme"><DockIcon className={dockIconClass}><ModeToggle className="size-full cursor-pointer" /></DockIcon></DockTip>
      </Dock>
    </div>
  );
}
