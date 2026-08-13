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
  Gauge,
  PanelTop,
  BarChart3,
} from "lucide-react";

export const DATA = {
  name: "Sherif Saad Sofiu",
  initials: "SS",
  url: "https://portfolio-shiffoo.vercel.app",
  location: "Cairo, Egypt",
  locationLink: "https://www.google.com/maps/place/Cairo,+Egypt",
  description:
    "Senior Performance Media Buyer · Paid Media Strategy · Structured Experimentation · Full-Funnel Optimization",
  summary:
    "Business-minded Senior Performance Media Buyer with hands-on paid acquisition experience across GCC and North African markets. Specialized in Meta and Snapchat Ads, with additional experience across TikTok and Google Ads. I work across education, travel, e-commerce, dropshipping, and mobile app businesses — combining business and advertising audits, full-funnel planning, structured experimentation, performance investigation, and hands-on campaign optimization.",
  avatarUrl: "",

  skills: [
    { name: "Business & Ad Account Auditing", icon: Search },
    { name: "Paid Media Strategy", icon: Target },
    { name: "Media Planning", icon: BarChart3 },
    { name: "Campaign Architecture", icon: Waypoints },
    { name: "Structured Creative Testing", icon: FlaskConical },
    { name: "Campaign Structure Testing", icon: PanelTop },
    { name: "Full-Funnel Analysis", icon: ChartSpline },
    { name: "Performance Investigation", icon: Gauge },
    { name: "Tracking & Measurement", icon: Tags },
    { name: "Dashboards, Automation & AI", icon: Bot },
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "sherifelsofiu@gmail.com",
    tel: "+201094610691",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sherif-saad-growth/",
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
      items: ["Meta Ads", "Snapchat Ads", "TikTok Ads", "Google Ads"],
    },
    {
      label: "Tracking & Analytics",
      items: ["Meta Pixel", "GTM", "GA4", "Conversion API", "Microsoft Clarity", "AppsFlyer — Basic"],
    },
    {
      label: "Data & Reporting",
      items: ["Google Sheets", "Apps Script", "BigQuery"],
    },
    {
      label: "Automation & AI",
      items: ["Make", "Zapier", "n8n", "ChatGPT", "Claude", "Gemini", "Custom MCP Integrations"],
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
