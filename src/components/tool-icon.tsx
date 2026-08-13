"use client";

import { useState } from "react";

const FALLBACK_DOMAINS: Record<string, string> = {
  "Meta Ads": "meta.com",
  "Meta Pixel": "meta.com",
  "Conversion API": "meta.com",
  "Snapchat Ads": "snapchat.com",
  "TikTok Ads": "tiktok.com",
  "Google Ads": "ads.google.com",
  GTM: "tagmanager.google.com",
  GA4: "analytics.google.com",
  Clarity: "clarity.microsoft.com",
  AppsFlyer: "appsflyer.com",
  "Google Sheets": "sheets.google.com",
  "Apps Script": "script.google.com",
  BigQuery: "cloud.google.com",
  Make: "make.com",
  Zapier: "zapier.com",
  n8n: "n8n.io",
  Lovable: "lovable.dev",
  ChatGPT: "chatgpt.com",
  Claude: "claude.ai",
  Gemini: "gemini.google.com",
  "Custom MCP": "openai.com",
};

export default function ToolIcon({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const domain = FALLBACK_DOMAINS[name];
  const fallback = domain
    ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`
    : null;
  const resolved = failed && fallback ? fallback : src;

  if (!resolved) {
    return (
      <span className="flex size-5 items-center justify-center rounded-md bg-muted text-[9px] font-bold text-muted-foreground ring-1 ring-border">
        {name.slice(0, 1).toUpperCase()}
      </span>
    );
  }

  return (
    <span className="flex size-5 items-center justify-center rounded-md bg-white ring-1 ring-black/5">
      <img
        src={resolved}
        alt=""
        className="size-3.5 object-contain"
        onError={() => {
          if (!failed && fallback) setFailed(true);
        }}
      />
    </span>
  );
}
