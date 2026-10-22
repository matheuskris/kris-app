import type { Locale } from "@/lib/i18n/locales";
import {
  earlyCareerNotePt,
  experiencesPt,
} from "@/lib/content/experience.pt";

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type EarlyCareerNote = {
  label: string;
  period: string;
  description: string;
};

const experiences: ExperienceEntry[] = [
  {
    id: "witek",
    company: "WITEK",
    role: "Full-Stack Developer",
    period: "Jan 2025 — Present",
    summary:
      "Performance and stability ownership on a legacy property-map platform used by Brazilian notary offices.",
    highlights: [
      "Refactored critical queries and routes, cutting map load time by ~50% and eliminating peak-time outages.",
      "Built a UTM-to-WGS84 coordinate conversion system to standardize geospatial data and improve map accuracy.",
      "Adapted quickly to an undocumented PHP/JS codebase, contributing autonomously while collaborating on trade-offs.",
    ],
    tags: ["PHP", "JavaScript", "Performance", "Geospatial"],
  },
  {
    id: "dbkz",
    company: "DBKZ",
    role: "Full-Stack Developer",
    period: "Sep 2024 — Present",
    summary:
      "Sole full-stack developer on a business-critical medical billing system processing R$1.5M/month across 74 hospitals.",
    highlights: [
      "Owned system design, cloud organization, and SQL data modeling for a product handling 25,000 payment parameters and 4,000 procedures.",
      "Built and maintained the NestJS API, React Native app, and Next.js web application end to end.",
      "Integrated third-party services for boleto payments, email, WhatsApp, file uploads, and user analytics.",
    ],
    tags: ["NestJS", "Next.js", "React Native", "SQL", "Cloud"],
  },
  {
    id: "refmed",
    company: "Refmed",
    role: "Full-Stack Developer",
    period: "Jan 2024 — Dec 2024",
    summary:
      "Built a healthcare patient-referral product from zero across mobile, web, API, and database layers.",
    highlights: [
      "Designed and shipped React Native, Next.js, and tRPC/Prisma API from scratch with senior mentorship.",
      "Modeled the SQL database and integrated PIX payments, email, WhatsApp, uploads, and event-based analytics.",
      "Implemented realtime chat using Firebase to sync information between clients.",
    ],
    tags: ["Next.js", "tRPC", "Prisma", "React Native", "Firebase"],
  },
  {
    id: "keiken",
    company: "Keiken",
    role: "Full-Stack Developer",
    period: "Feb 2023 — Jan 2024",
    summary:
      "Backend ownership for money-movement workflows across partners, clients, and associated companies on a benefits marketplace.",
    highlights: [
      "Built async money-movement flows with Spring Messaging and cron jobs processing ~R$120k/month.",
      "Learned Java and Spring Boot independently to maintain and extend the backend API.",
      "Developed automated tests with JUnit and complex queries with QueryDSL.",
    ],
    tags: ["Java", "Spring Boot", "Async Events", "QueryDSL"],
  },
];

const earlyCareerNote: EarlyCareerNote = {
  label: "Freelance",
  period: "Aug 2022 — Dec 2022",
  description: "Built single-page applications on demand.",
};

const experiencesByLocale: Record<Locale, ExperienceEntry[]> = {
  en: experiences,
  pt: experiencesPt,
};

const earlyCareerByLocale: Record<Locale, EarlyCareerNote> = {
  en: earlyCareerNote,
  pt: earlyCareerNotePt,
};

export function getExperiences(locale: Locale): ExperienceEntry[] {
  return experiencesByLocale[locale];
}

export function getEarlyCareerNote(locale: Locale): EarlyCareerNote {
  return earlyCareerByLocale[locale];
}
