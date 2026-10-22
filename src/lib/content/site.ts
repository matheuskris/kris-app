import type { Locale } from "@/lib/i18n/locales";
import { siteConfigPt } from "@/lib/content/site.pt";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  icon: "terminal" | "share" | "mail";
  href: string;
  label: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
  title: string;
  body: string;
  meta: string;
  metaValue: string;
};

export type Competency = {
  icon: string;
  title: string;
  tools: string;
};

const links = {
  linkedin: "https://www.linkedin.com/in/matheuskris/",
  github: "https://github.com/matheuskris",
  email: "mailto:matheuskris@gmail.com",
  emailAddress: "matheuskris@gmail.com",
} as const;

export const siteConfig = {
  brandName: "Matheus Krisciumas",
  brandMark: "Matheus Krisciumas",
  roleTitle: "Software engineer",
  tagline:
    "Software engineer. Full-stack work on business systems. Remote, from Brazil.",
  hero: {
    subtitle:
      "I work on full-stack systems for real business workflows. Remote, based in Brazil.",
    primaryCta: { label: "See the work", href: "#projects" },
    secondaryCta: { label: "Say hello", href: "#contact" },
  },
  work: {
    title: "Work",
    subtitle:
      "Billing, maps, money movement, and a healthcare product. The outcomes sit with each case.",
  },
  impact: {
    index: "// 02. Measurable outcomes",
    title: "System impact & production metrics",
    subtitle:
      "Numbers from live work, not a benchmark lab. Each one is tied to a system that was already in use.",
    principles: [
      "Clear failure domains",
      "Business-tied decisions",
      "Type-safe contracts",
      "Stability under peak load",
    ],
  },
  metrics: [
    {
      label: "Latency reduction",
      value: "~50%",
      title: "Property map load time",
      body: "Refactored critical queries and routes on a legacy property-map platform, cutting map load time by about half and removing peak-time outages.",
      meta: "System",
      metaValue: "WITEK maps",
    },
    {
      label: "Monthly volume",
      value: "R$ 1.5M+",
      title: "Medical billing throughput",
      body: "Sole full-stack owner of a billing system processing about R$1.5M per month across 74 hospitals.",
      meta: "Scope",
      metaValue: "74 hospitals",
    },
    {
      label: "Domain scale",
      value: "25k",
      title: "Payment parameters modeled",
      body: "SQL model and product surface for 25,000 payment parameters and 4,000 procedures, plus boleto, email, and WhatsApp integrations.",
      meta: "Procedures",
      metaValue: "4,000",
    },
  ] satisfies Metric[],
  experience: {
    title: "Experience",
    subtitle:
      "Healthcare, maps, and money movement. Remote, based in Brazil.",
  },
  about: {
    title: "About",
    quote:
      "I like understanding the problem first, then building systems that stay simple to reason about as they grow.",
    paragraphs: [
      "I'm a software engineer who works on business and ecommerce workflows. I care about clear communication, reliable delivery with teams, and tying technical decisions to real business value—not just shipping code for its own sake.",
      "Outside of work, you'll find me playing guitar, staying consistent with fitness, and spending time with friends. That balance keeps me grounded and focused.",
    ],
    signatureRole: "Full-Stack Developer",
    skills: [
      "Node.js / APIs",
      "TypeScript",
      "Full-Stack Product Work",
      "Systems Design",
      "Ecommerce Workflows",
    ],
    competencies: [
      {
        icon: "dns",
        title: "APIs & backend",
        tools: "NestJS, Node.js, tRPC, Java, Spring Boot, PHP, SQL, Prisma.",
      },
      {
        icon: "account_tree",
        title: "Product systems",
        tools:
          "Next.js, React Native, TypeScript, Firebase realtime, payment and messaging integrations.",
      },
      {
        icon: "map",
        title: "Domain work",
        tools:
          "Medical billing, geospatial maps, UTM to WGS84 conversion, async money movement.",
      },
    ] satisfies Competency[],
    portraitUrl: "/profile-pic.jpeg",
    portraitAlt: "Matheus Krisciumas",
  },
  contact: {
    title: "Hello.",
    subtitle:
      "The fastest way to reach me is on LinkedIn. Prefer email? Send a message below or write directly.",
    avatarUrl: "/profile-pic.jpeg",
    avatarAlt: "Matheus Krisciumas",
    email: links.emailAddress,
    availability: "UTC-3 · Remote, Brazil",
    languages: "English & Portuguese",
  },
  nav: [
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  social: [
    { icon: "terminal", href: links.github, label: "GitHub" },
    { icon: "share", href: links.linkedin, label: "LinkedIn" },
    { icon: "mail", href: links.email, label: "Email" },
  ] satisfies SocialLink[],
  footer: {
    precision: "Matheus Krisciumas",
    stack: "TypeScript · NestJS · Next.js · React Native · Java · SQL",
    availability: "UTC-3 · Remote",
    copyright: "© 2026 Matheus Krisciumas. Remote, based in Brazil.",
    links: [
      { label: "GitHub", href: links.github },
      { label: "LinkedIn", href: links.linkedin },
      { label: "Email", href: links.email },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
    ] satisfies FooterLink[],
  },
  chrome: {
    systems: "",
    available: "Available",
    getInTouch: "Say hello",
    menu: "Menu",
    close: "Close",
    projectsIndex: "All work",
    blog: "Notes",
    language: "Language",
    competenciesHeading: "What I work with",
    openToConversations: "Open to conversations",
    portraitRole: "Full-stack & business systems",
    remote: "Remote",
    primaryCommunication: "Primary communication",
    copyAddress: "Copy address",
    copied: "Copied",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    message: "Message",
    messagePlaceholder: "What would you like to talk about?",
    sending: "Sending...",
    sendMessage: "Send message",
    engineeringChallenge: "The problem",
    impactOutcome: "What shipped",
    allNotes: "All notes",
  },
  pages: {
    projects: {
      title: "Work",
      subtitle:
        "Billing, maps, money movement, and a healthcare product — the same cases as the home page.",
    },
    blog: {
      title: "Notes",
      subtitle: "Occasional writing on systems and the decisions behind them.",
      emptyTitle: "Nothing published yet",
      emptyBody: "When a note is ready, it will live here. The work is on the home page.",
      back: "Back to the work",
    },
    notFound: {
      title: "This page isn’t here.",
      body: "It may have moved, or it was never published.",
      cta: "Go home",
    },
  },
};

export type SiteConfig = typeof siteConfig;

const dictionaries: Record<Locale, SiteConfig> = {
  en: siteConfig,
  pt: siteConfigPt,
};

export function getSiteConfig(locale: Locale): SiteConfig {
  return dictionaries[locale];
}
