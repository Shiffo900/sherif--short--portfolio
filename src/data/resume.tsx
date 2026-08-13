import { Icons } from "@/components/icons";
import {
  HomeIcon,
  Target,
  FlaskConical,
  Search,
  Waypoints,
  ChartSpline,
  Bot,
  Tags,
  BarChart3,
} from "lucide-react";

const LEGACY_ASSET_BASE = "https://charm-component-cloud.vercel.app/assets";

export const DATA = {
  name: "Sherif Saad Sofiu",
  initials: "SS",
  url: "https://sherif-short-portfolio.vercel.app",
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/Cairo,+Egypt",
  description:
    "Senior Performance Media Buyer · Paid Media Strategy · Structured Experimentation · Full-Funnel Optimization",
  summary:
    "Business-minded Senior Performance Media Buyer with hands-on paid acquisition experience across GCC and North African markets. Specialized in Meta and Snapchat Ads, with additional experience across TikTok and Google Ads. I work across education, travel, e-commerce, dropshipping, and mobile app businesses — combining business and advertising audits, full-funnel planning, structured experimentation, performance investigation, and hands-on campaign optimization.",
  avatarUrl: `${LEGACY_ASSET_BASE}/profile-sherif-CRWGRfaV.jpg`,

  channels: [
    { name: "Meta Ads", icon: "https://cdn.simpleicons.org/meta/0866FF" },
    { name: "TikTok Ads", icon: "https://cdn.simpleicons.org/tiktok/000000" },
    { name: "Snapchat Ads", icon: "https://cdn.simpleicons.org/snapchat/FFFC00" },
    { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads/4285F4" },
  ],

  skills: [
    { name: "Ad Account Structure", icon: Waypoints },
    { name: "Account Auditing & Diagnosis", icon: Search },
    { name: "Data Analysis & Decision Making", icon: ChartSpline },
    { name: "Testing & Learning Loops", icon: FlaskConical },
    { name: "Paid Media Strategy", icon: Target },
    { name: "Media Planning & Budget Allocation", icon: BarChart3 },
    { name: "Performance Investigation", icon: Search },
    { name: "Tracking & Attribution", icon: Tags },
    { name: "Dashboard & Reporting Automation", icon: Bot },
    { name: "Multi-Channel Paid Acquisition", icon: Target },
  ],

  brands: [
    { name: "Modrk", logo: `${LEGACY_ASSET_BASE}/modrk-DzQCOhRT.png` },
    { name: "4 Seasons", logo: `${LEGACY_ASSET_BASE}/4seasons-a8b5ObPg.png` },
    { name: "Fantastic Tours", logo: `${LEGACY_ASSET_BASE}/fantastic-CJA2EKx8.png` },
    { name: "Mother Planet", logo: `${LEGACY_ASSET_BASE}/motherplanet-D_ChjyQs.jpg` },
    { name: "Amazon Tours", logo: `${LEGACY_ASSET_BASE}/amazontours-B4Al5bwM.png` },
    { name: "Sleep Well", logo: `${LEGACY_ASSET_BASE}/sleepwell-DG5s7eYE.jpg` },
    { name: "Montad Travel", logo: `${LEGACY_ASSET_BASE}/mentad-B4Z650zF.jpg` },
  ],

  resultScreenshots: [
    `${LEGACY_ASSET_BASE}/result-1-B2fXSnke.png`,
    `${LEGACY_ASSET_BASE}/result-2-CYEt_g9b.png`,
    `${LEGACY_ASSET_BASE}/result-3-BAaYwcVx.png`,
    `${LEGACY_ASSET_BASE}/result-4-Dhz0ENMu.png`,
    `${LEGACY_ASSET_BASE}/result-5-DpeyehQS.png`,
    `${LEGACY_ASSET_BASE}/result-6-CoLrYAZY.png`,
    `${LEGACY_ASSET_BASE}/result-7-DeH_26cM.png`,
    `${LEGACY_ASSET_BASE}/result-8-DREz8Qr9.png`,
    `${LEGACY_ASSET_BASE}/result-9-CFth9jSw.png`,
    `${LEGACY_ASSET_BASE}/result-10-9HU-Jhui.png`,
    `${LEGACY_ASSET_BASE}/result-11-a6Bt8Ljy.png`,
    `${LEGACY_ASSET_BASE}/result-12-DNaW5LAW.png`,
    `${LEGACY_ASSET_BASE}/result-13-DB1Wg6A3.png`,
    `${LEGACY_ASSET_BASE}/result-14-84Kn2xKB.png`,
    `${LEGACY_ASSET_BASE}/result-15-DgJpCJxo.png`,
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "sherifelsofiu@gmail.com",
    tel: "+201094610691",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sherif-sofiu/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:sherifelsofiu@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "TMAYS",
      href: "#",
      badges: ["Promotion"],
      location: "Cairo, Egypt",
      title: "Senior Performance Media Buyer",
      logoUrl: "",
      start: "Dec 2025",
      end: "Present",
      description:
        "Promoted after the first year to assume end-to-end ownership of the performance marketing process across strategy, execution, testing, measurement, analysis, and reporting. Manage Meta paid acquisition for a multi-step education enrollment funnel across Egypt, GCC, and North African markets. Lead business briefing and account auditing through media planning, campaign architecture, testing roadmaps, investigation, and optimization. Established media planning, tracking, dashboarding, and reporting frameworks for the team.",
    },
    {
      company: "TMAYS",
      href: "#",
      badges: [],
      location: "Cairo, Egypt",
      title: "Performance Media Buyer",
      logoUrl: "",
      start: "Dec 2024",
      end: "Nov 2025",
      description:
        "Managed and optimized paid acquisition across education funnels while building a stronger operating system around campaign structure, creative testing, funnel analysis, tracking, and reporting. Worked across multiple regional markets and translated performance observations into structured optimization actions.",
    },
    {
      company: "Green Codey",
      href: "#",
      badges: [],
      location: "Egypt",
      title: "Junior Media Buyer",
      logoUrl: "",
      start: "2022",
      end: "2023",
      description:
        "Supported end-to-end travel lead-generation campaigns, primarily through Snapchat Ads. Contributed to media planning, campaign setup, monitoring, performance analysis, optimization, and reporting. Created landing pages, implemented conversion tracking, and reviewed campaign-related deliverables from a performance perspective.",
    },
    {
      company: "Sigma Marketing Agency",
      href: "#",
      badges: ["Project-Based"],
      location: "Remote",
      title: "Performance Media Buyer",
      logoUrl: "",
      start: "Project-Based",
      end: "",
      description:
        "Supported multi-channel paid acquisition projects across travel, e-commerce, and mobile app businesses using Meta, Snapchat, TikTok, and Google Ads. Contributed to planning, execution, structured testing, tracking, analysis, optimization, and basic mobile app measurement.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Egypt",
      title: "Media Buyer",
      logoUrl: "",
      start: "2021",
      end: "2021",
      description:
        "Managed small-budget paid advertising campaigns for local brands, building hands-on foundations in campaign setup, targeting, creative coordination, monitoring, optimization, and reporting.",
    },
  ],

  systems: [
    {
      title: "Multi-Channel Reporting",
      description:
        "Build reporting sheets that consolidate advertising data and automate recurring dashboard updates across channels.",
    },
    {
      title: "Observation & Anomaly Detection",
      description:
        "Create AI-assisted workflows that help surface performance changes, patterns, anomalies, and investigation starting points.",
    },
    {
      title: "Tracking & Measurement Support",
      description:
        "Build workflows around campaign tracking, landing-page measurement, naming conventions, and UTM governance.",
    },
    {
      title: "AI & Workflow Automation",
      description:
        "Develop AI-assisted reporting, analysis, landing-page production, custom MCP integrations, and workflow automations.",
    },
  ],

  toolGroups: [
    {
      label: "Advertising",
      items: [
        { name: "Meta Ads", icon: "https://cdn.simpleicons.org/meta/0866FF" },
        { name: "Snapchat Ads", icon: "https://cdn.simpleicons.org/snapchat/FFFC00" },
        { name: "TikTok Ads", icon: "https://cdn.simpleicons.org/tiktok/000000" },
        { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads/4285F4" },
      ],
    },
    {
      label: "Tracking & Analytics",
      items: [
        { name: "Meta Pixel", icon: "https://cdn.simpleicons.org/meta/0866FF" },
        { name: "GTM", icon: "https://cdn.simpleicons.org/googletagmanager/246FDB" },
        { name: "GA4", icon: "https://cdn.simpleicons.org/googleanalytics/E37400" },
        { name: "Conversion API", icon: "https://cdn.simpleicons.org/meta/0866FF" },
        { name: "Clarity", icon: "https://cdn.simpleicons.org/microsoft/5E5E5E" },
        { name: "AppsFlyer", icon: "https://cdn.simpleicons.org/appsflyer/000000" },
      ],
    },
    {
      label: "Data & Reporting",
      items: [
        { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853" },
        { name: "Apps Script", icon: "https://cdn.simpleicons.org/google/4285F4" },
        { name: "BigQuery", icon: "https://cdn.simpleicons.org/googlebigquery/4285F4" },
      ],
    },
    {
      label: "Automation & AI",
      items: [
        { name: "Make", icon: "https://cdn.simpleicons.org/make/6D00CC" },
        { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4F00" },
        { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
        { name: "Lovable", icon: "https://lovable.dev/favicon.ico" },
        { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/000000" },
        { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/191919" },
        { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
        { name: "Custom MCP", icon: "https://cdn.simpleicons.org/openai/000000" },
      ],
    },
  ],

  markets: [
    "Saudi Arabia",
    "UAE",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Egypt",
    "Morocco",
    "Algeria",
    "Libya",
    "Jordan",
  ],

  industries: [
    "Education",
    "Travel",
    "E-commerce",
    "Dropshipping",
    "Mobile Applications",
    "Local Brands",
  ],

  education: [
    {
      school: "Beni Suef University",
      href: "https://www.bsu.edu.eg/",
      degree: "Bachelor of Commerce in Accounting",
      logoUrl: "",
      start: "2018",
      end: "2022",
    },
  ],

  additional: [
    { label: "Military Service", value: "Completed, 2024" },
    { label: "Arabic", value: "Native" },
    { label: "English", value: "Working proficiency · strong reading & written communication" },
  ],

  projects: [],
  hackathons: [],
} as const;
