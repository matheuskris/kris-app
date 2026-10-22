import type { Locale } from "@/lib/i18n/locales";
import { projectsPt } from "@/lib/content/projects.pt";

export type ProjectVisual = "ledger" | "geo" | "pipeline" | "surfaces";

export type ProjectStep = {
  title: string;
  detail: string;
};

export type ProjectStat = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  ref: string;
  kicker: string;
  title: string;
  description: string;
  challenge: string;
  outcome: string;
  stack: string[];
  featured: boolean;
  visual: ProjectVisual;
  visualTitle: string;
  visualStatus: string;
  steps: ProjectStep[];
  stats: ProjectStat[];
  linkLabel: string;
};

const projects: Project[] = [
  {
    slug: "dbkz-billing",
    ref: "SYS.REF: 01 // BILLING",
    kicker: "DBKZ",
    title: "Medical billing across 74 hospitals",
    description:
      "End-to-end billing product for a medical operation moving about R$1.5M every month.",
    challenge:
      "Own system design, cloud layout, and SQL modeling for 25,000 payment parameters and 4,000 procedures—without a second engineer on the product.",
    outcome:
      "Shipped the NestJS API, React Native app, and Next.js web app, and wired boleto payments, email, WhatsApp, uploads, and analytics.",
    stack: ["NestJS", "Next.js", "React Native", "SQL"],
    featured: true,
    visual: "ledger",
    visualTitle: "billing_flow.trace",
    visualStatus: "LIVE // DBKZ",
    steps: [
      { title: "Resolve payment parameters", detail: "25,000 rules" },
      { title: "Match procedure codes", detail: "4,000 procedures" },
      { title: "Issue boleto & notify", detail: "email + WhatsApp" },
    ],
    stats: [
      { label: "Hospitals", value: "74" },
      { label: "Monthly", value: "R$ 1.5M" },
      { label: "Surfaces", value: "3" },
    ],
    linkLabel: "Open the case on the projects index",
  },
  {
    slug: "witek-maps",
    ref: "SYS.REF: 02 // GEOSPATIAL",
    kicker: "WITEK",
    title: "Property map load, cut in half",
    description:
      "Stability work on a legacy property-map platform used by Brazilian notary offices.",
    challenge:
      "An undocumented PHP and JavaScript codebase was failing at peak time. Map queries and coordinate handling were the bottleneck.",
    outcome:
      "Refactored critical queries and routes, cut map load time by about 50%, and added a UTM-to-WGS84 conversion path so geospatial data stayed consistent.",
    stack: ["PHP", "JavaScript", "Geospatial", "Performance"],
    featured: true,
    visual: "geo",
    visualTitle: "map_request.pipeline",
    visualStatus: "~50% LOAD TIME",
    steps: [
      { title: "Client map viewport", detail: "bbox request" },
      { title: "UTM → WGS84 conversion", detail: "normalized coords" },
      { title: "Refactored critical queries", detail: "fewer round trips" },
      { title: "Stable peak-time render", detail: "outages removed" },
    ],
    stats: [
      { label: "Load time", value: "~50%" },
      { label: "Coords", value: "UTM→WGS84" },
      { label: "Peak", value: "Stable" },
    ],
    linkLabel: "Open the case on the projects index",
  },
  {
    slug: "keiken-money",
    ref: "SYS.REF: 03 // MONEY MOVEMENT",
    kicker: "Keiken",
    title: "Async money movement for a benefits marketplace",
    description:
      "Backend ownership for flows between partners, clients, and associated companies.",
    challenge:
      "Money had to move reliably across parties. I learned Java and Spring Boot on the job to extend an existing API without breaking settlement.",
    outcome:
      "Built async flows with Spring Messaging and cron jobs processing about R$120k per month, plus JUnit coverage and QueryDSL queries.",
    stack: ["Java", "Spring Boot", "Async Events", "QueryDSL"],
    featured: true,
    visual: "pipeline",
    visualTitle: "settlement.workers",
    visualStatus: "~R$ 120K / MO",
    steps: [
      { title: "Partner event ingested", detail: "Spring Messaging" },
      { title: "Cron settles the batch", detail: "scheduled" },
      { title: "QueryDSL reads the ledger", detail: "complex filters" },
      { title: "JUnit guards the path", detail: "regression net" },
    ],
    stats: [
      { label: "Monthly", value: "R$ 120k" },
      { label: "Style", value: "Async" },
      { label: "Tests", value: "JUnit" },
    ],
    linkLabel: "Open the case on the projects index",
  },
  {
    slug: "refmed-referral",
    ref: "SYS.REF: 04 // FROM ZERO",
    kicker: "Refmed",
    title: "Patient referral product, built from scratch",
    description:
      "Mobile, web, API, and database for a healthcare referral workflow.",
    challenge:
      "Nothing existed yet. The product needed payments, messaging, uploads, and a chat that stayed in sync between clients.",
    outcome:
      "Shipped React Native, Next.js, and a tRPC/Prisma API, then added PIX, email, WhatsApp, uploads, analytics, and Firebase realtime chat.",
    stack: ["Next.js", "tRPC", "Prisma", "React Native", "Firebase"],
    featured: true,
    visual: "surfaces",
    visualTitle: "product.surfaces",
    visualStatus: "SHIPPED 2024",
    steps: [
      { title: "React Native client", detail: "referrals" },
      { title: "Next.js console", detail: "operators" },
      { title: "tRPC + Prisma API", detail: "SQL model" },
      { title: "Firebase chat", detail: "realtime sync" },
    ],
    stats: [
      { label: "Clients", value: "2" },
      { label: "Payments", value: "PIX" },
      { label: "Chat", value: "Firebase" },
    ],
    linkLabel: "Open the case on the projects index",
  },
];

const projectsByLocale: Record<Locale, Project[]> = {
  en: projects,
  pt: projectsPt,
};

export function getAllProjects(locale: Locale): Project[] {
  return projectsByLocale[locale];
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getAllProjects(locale).filter((project) => project.featured);
}

export function getProjectBySlug(slug: string, locale: Locale): Project | null {
  return getAllProjects(locale).find((project) => project.slug === slug) ?? null;
}
