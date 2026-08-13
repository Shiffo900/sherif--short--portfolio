import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.94L2 22l5.22-1.58A9.93 9.93 0 1 0 12.04 2Zm0 17.96a8.08 8.08 0 0 1-4.12-1.13l-.3-.18-3.1.94.96-3.02-.2-.31A8.08 8.08 0 1 1 12.04 19.96Zm4.43-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.19-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-9h3l.45-3H13.5V8.08c0-.87.24-1.46 1.52-1.46H17V3.94c-.34-.05-1.5-.14-2.85-.14-2.82 0-4.75 1.72-4.75 4.88V10H6.2v3h3.2v9h4.1Z" />
    </svg>
  );
}

const extraSocials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201094610691",
    icon: WhatsAppIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sherifsaadsofiy",
    icon: FacebookIcon,
  },
];

const dockIconClass =
  "liquid-dock-icon rounded-full cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-all duration-300";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="liquid-dock z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 rounded-full border bg-card/90 backdrop-blur-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,.28)]">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a href={item.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} aria-label={item.label}>
                  <DockIcon className={dockIconClass}>
                    <item.icon className="size-full rounded-full overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8} className="liquid-tooltip rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm">
                <p>{item.label}</p><TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => {
            const IconComponent = social.icon;
            return (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <a href={social.url} target={social.url.startsWith("http") ? "_blank" : undefined} rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={name}>
                    <DockIcon className={dockIconClass}>
                      <IconComponent className="size-full rounded-full overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8} className="liquid-tooltip rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm">
                  <p>{name}</p><TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}

        {extraSocials.map((social) => {
          const IconComponent = social.icon;
          return (
            <Tooltip key={social.label}>
              <TooltipTrigger asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <DockIcon className={dockIconClass}>
                    <IconComponent className="size-full rounded-full overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8} className="liquid-tooltip rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm">
                <p>{social.label}</p><TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={dockIconClass}>
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className="liquid-tooltip rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm">
            <p>Theme</p><TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
