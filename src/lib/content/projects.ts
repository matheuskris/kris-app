import type { Locale } from "@/lib/i18n/locales";
import { projectsPt } from "@/lib/content/projects.pt";

export type ProjectVisual = "ledger" | "geo" | "pipeline" | "surfaces";

export type ProjectKind = "full-time" | "contract" | "personal";

export type ProjectKindFilter = ProjectKind | "all";

export type ProjectStep = {
  title: string;
  detail: string;
};

export type ProjectStat = {
  label: string;
  value: string;
};

export type ProjectSection = {
  heading: string;
  paragraphs: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Project = {
  slug: string;
  ref: string;
  kicker: string;
  title: string;
  description: string;
  challenge: string;
  outcome: string;
  idea: string;
  body: ProjectSection[];
  stack: string[];
  featured: boolean;
  kind: ProjectKind;
  period: string;
  startedAt: string;
  visual: ProjectVisual;
  visualTitle: string;
  visualStatus: string;
  steps: ProjectStep[];
  stats: ProjectStat[];
  images?: ProjectImage[];
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
    kind: "contract",
    period: "Sep 2024 — Present",
    startedAt: "2024-09",
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
    images: [
      {
        src: "/projects/dbkz/registro.jpg",
        alt: "DBKZ web console for image intake: uploaded appointment agenda, extraction prompt, and billing fields for hospital and coverage.",
        width: 1024,
        height: 591,
        caption: "Intake console: a document becomes a billed procedure, with hospital and coverage still to match.",
      },
    ],
    idea: "Billing here is not a checkout. It is matching tens of thousands of payment rules to procedure codes so hospitals can issue boletos every month—without a second engineer on the product.",
    body: [
      {
        heading: "The situation",
        paragraphs: [
          "The operation moves about R$1.5M a month across 74 hospitals. The product had to own the full path: which rule applies, which procedure is being billed, how the boleto goes out, and how the hospital is told.",
          "I was the only engineer on that surface. System design, cloud layout, and the SQL model all sat in the same place as the apps people actually used.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Treat billing as a rules engine with a human surface, not as a form that dumps into a spreadsheet. Twenty-five thousand payment parameters and four thousand procedures have to resolve into one payable document. If that match is wrong, the month does not close.",
          "The work was to make that match boring: model it in SQL, expose it through a NestJS API, and give operators a Next.js console and a React Native app that talk to the same contract.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "The API, the mobile app, and the web app went out together. Boleto, email, WhatsApp, uploads, and analytics were wired into the same flow so a billed procedure did not die in a side channel.",
        ],
      },
    ],
    linkLabel: "Read the case",
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
    kind: "full-time",
    period: "Jan 2025 — Present",
    startedAt: "2025-01",
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
    images: [
      {
        src: "/projects/witek/map.jpg",
        alt: "Witek property map over Brasília with selected layers, address search, and UTM controls.",
        width: 1024,
        height: 753,
        caption: "Property map: layers, address search, and UTM overlay on a live viewport.",
      },
    ],
    idea: "The map was already in production. The work was to make peak hours survivable: the bottleneck was queries and coordinate handling, not a missing feature.",
    body: [
      {
        heading: "The situation",
        paragraphs: [
          "Brazilian notary offices were already using the property-map platform. At peak it failed. The codebase was undocumented PHP and JavaScript, so the first job was to find which requests actually hurt.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "A map viewport is a bounding box. If that box is queried the long way, and if coordinates sit in UTM while the client expects WGS84, the page does not just look wrong—it times out.",
          "The idea was to cut the round trips on the critical path and put a conversion in the pipeline so geospatial data stayed consistent instead of being patched in the browser.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "Critical queries and routes were refactored. Map load time dropped by about half. Peak-time outages stopped being the normal case. The conversion path from UTM to WGS84 is now part of the request, not a local guess.",
        ],
      },
    ],
    linkLabel: "Read the case",
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
    kind: "full-time",
    period: "Feb 2023 — Jan 2024",
    startedAt: "2023-02",
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
    images: [
      {
        src: "/projects/keiken/marketplace.jpg",
        alt: "Keiken marketplace listing a psychologist with price, filters, and a booking calendar.",
        width: 1024,
        height: 590,
        caption: "Marketplace surface: specialists, filters, and booking.",
      },
      {
        src: "/projects/keiken/payment-flow.jpg",
        alt: "Diagram of payments from users through the app and company to partner payouts.",
        width: 1024,
        height: 576,
        caption: "How money moves between users, the company, and partners.",
      },
    ],
    idea: "Settlement cannot live in a request. Money between partners, clients, and associated companies has to move as an async path that still closes the month.",
    body: [
      {
        heading: "The situation",
        paragraphs: [
          "Keiken is a benefits marketplace. The backend already existed. I learned Java and Spring Boot on the job to extend it without breaking settlement between parties.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "A partner event is ingested, a worker settles the batch, and the ledger is read with filters that would be painful as ad-hoc SQL. The month is about R$120k of movement. If that path is synchronous, one slow partner holds everyone else.",
          "The idea was to treat money movement as messaging plus a scheduled close, then put JUnit around the path so a change in QueryDSL did not silently skip a party.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "Async flows with Spring Messaging, cron jobs for the batch, QueryDSL for the complex reads, and regression tests on the settlement path.",
        ],
      },
    ],
    linkLabel: "Read the case",
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
    kind: "full-time",
    period: "Jan 2024 — Dec 2024",
    startedAt: "2024-01",
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
    images: [
      {
        src: "/projects/refmed/colleagues.jpg",
        alt: "Refmed web console listing clinic colleagues by specialty, with a Referenciar action and Salvador clinic context.",
        width: 1024,
        height: 898,
        caption: "Operator console: colleagues in the clinic network, by specialty.",
      },
    ],
    idea: "Nothing existed yet. The product had to be the referral workflow itself: two surfaces, one API, payments, and a chat that did not drift between clients.",
    body: [
      {
        heading: "The situation",
        paragraphs: [
          "Refmed needed a healthcare referral product from zero. Mobile for the people in the flow, a web console for operators, an API, and a database. Payments, messaging, uploads, and chat were not extras—they were how the referral actually moved.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Build the three surfaces against one contract. React Native for referrals in the field, Next.js for the people who operate the queue, tRPC and Prisma for the model. Chat had to stay in sync, so Firebase sat next to the SQL store instead of pretending SQL was realtime.",
          "PIX, email, WhatsApp, uploads, and analytics plugged into that same path so a referral did not leave the product to complete.",
        ],
      },
      {
        heading: "What shipped",
        paragraphs: [
          "The stack went out as one product in 2024, used by two clients, with a SQL model and a realtime channel that did not fight each other.",
        ],
      },
    ],
    linkLabel: "Read the case",
  },
  {
    slug: "caixa-flow",
    ref: "SYS.REF: 05 // PETTY CASH",
    kicker: "Caixa Flow",
    title: "Petty-cash control for field teams",
    description:
      "Invite-only B2B SaaS that replaces spreadsheets and WhatsApp for employee petty cash: spend, attach receipts, review, reimburse.",
    challenge:
      "A mid-size Brazilian contractor ran fundos fixos in Excel and photo dumps in WhatsApp. Site leads spent from a float; finance rebuilt the month from screenshots; reimbursements lagged because nobody knew which receipts were already paid.",
    outcome:
      "Shipped a closed multi-tenant ops layer—invite-only access, receipts stored with the expense, and a loop from spend to review to payment, with role guards, Postgres RLS, and Excel/ZIP exports.",
    stack: ["Next.js", "Supabase", "TypeScript", "Vercel"],
    featured: true,
    kind: "personal",
    period: "2026 — Present",
    startedAt: "2026-01",
    visual: "ledger",
    visualTitle: "fundo_fixo.loop",
    visualStatus: "INVITE ONLY",
    steps: [
      { title: "Open a fund against the float", detail: "valor_base" },
      { title: "Submit spend with a receipt", detail: "photo or PDF" },
      { title: "Request close; finance reviews", detail: "approve / reject" },
      { title: "Record payment; archive the fund", detail: "Excel + ZIP" },
    ],
    stats: [
      { label: "Access", value: "Invite" },
      { label: "Roles", value: "4" },
      { label: "Tenancy", value: "Isolated" },
    ],
    images: [
      {
        src: "/projects/caixa-flow/mobile.jpg",
        alt: "Caixa Flow mobile screen of an active petty-cash fund with two expenses, one pending and one reviewed.",
        width: 904,
        height: 1024,
        caption: "Field app: open fund, receipts on the expense, pending vs reviewed.",
      },
      {
        src: "/projects/caixa-flow/dashboard.jpg",
        alt: "Caixa Flow finance dashboard for a closed petty-cash fund, with expense table and Excel export.",
        width: 1024,
        height: 736,
        caption: "Finance console: review the fund, totals, and export to Excel.",
      },
    ],
    idea: "Petty cash fails when the receipt lives in WhatsApp and the float lives in Excel. The idea is a closed loop: one active fund, the receipt attached to the expense, then review and payment—invite only, one company at a time.",
    body: [
      {
        heading: "The situation",
        paragraphs: [
          "A mid-size Brazilian contractor ran fundos fixos for crews on several sites. Site leads spent from a float. Photos of invoices piled up in WhatsApp groups. Finance reconstructed the month from screenshots. Reimbursements lagged because nobody knew which receipts were already paid.",
          "They needed a closed system: only invited people, receipts stored with the expense, and a loop that could be followed from spend to payment.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Caixa Flow is the operations layer for that loop. An employee has a float (valor_base) and one active petty-cash fund at a time. They photograph an invoice, fill document type, number, supplier, category, and optional obra, then submit. When the period is done they request close. Finance approves or rejects each line, confirms the total, records payment. The fund archives; a new one can open.",
          "Owners invite admins. Admins invite employees. A platform admin onboards companies. Everyone else stays out. Data is isolated per company. There is no public signup.",
        ],
      },
      {
        heading: "What it covers",
        paragraphs: [
          "Four roles: platform admin, company owner, company admin, employee. Job/site registry with optional per-employee restriction. Payment history. Excel and ZIP exports for accounting. In-app notifications and email on fund close, confirmation, and payment. Receipts in a private bucket, cleaned up after a retention window. Password login, invite acceptance, password reset.",
          "Security is layered: route proxy by role, layout guards, and Postgres RLS. Sensitive writes go through SECURITY DEFINER RPCs.",
        ],
      },
      {
        heading: "What it is not",
        paragraphs: [
          "The MVP is not public self-serve signup or billing, not bank or PIX automation, not per-company custom categories, and not a native app. It is a responsive web product with the camera in the browser.",
        ],
      },
    ],
    linkLabel: "Read the case",
  },
  {
    slug: "staff-flow",
    ref: "SYS.REF: 06 // TIMESHEETS",
    kicker: "Staff Flow",
    title: "Timesheets and monthly close for field teams",
    description:
      "Web app for companies that run people across worksites: hours on the job, engineer review, and a month-end close with overtime and night extra.",
    challenge:
      "A contractor spread across several states kept hours in WhatsApp photos and Excel. Saturday and holiday overtime rules differed by city, night extra was often missed, and month-end meant three people reconciling the same grid.",
    outcome:
      "Shipped the loop obra → ponto → conferência → fechamento: site admins log the day, engineers confirm hours, HR closes payroll with Brazilian municipality rules, and owners see cost per obra—not a dump of cells.",
    stack: ["Next.js", "Cloudflare", "Drizzle", "TypeScript"],
    featured: true,
    kind: "personal",
    period: "2026 — Present",
    startedAt: "2026-02",
    visual: "pipeline",
    visualTitle: "folha_ponto.loop",
    visualStatus: "MONTHLY CLOSE",
    steps: [
      { title: "Log hours on the obra", detail: "entry / exit" },
      { title: "Engineer confirms the sheet", detail: "review" },
      { title: "Rules apply overtime & night extra", detail: "IBGE holidays" },
      { title: "Office closes the month", detail: "payroll trail" },
    ],
    stats: [
      { label: "Roles", value: "7" },
      { label: "Rules", value: "Local" },
      { label: "Close", value: "Monthly" },
    ],
    images: [
      {
        src: "/projects/staff-flow/dashboard.jpg",
        alt: "Staff Flow company dashboard with overtime cost by job, extra hours by site, and monthly payroll trend.",
        width: 1024,
        height: 738,
        caption: "Company panel: overtime cost and hours per obra, then the monthly close.",
      },
    ],
    idea: "Hours are a local rule, not a company-wide table. Capture the day on the obra, confirm it, apply overtime and night extra for that municipality, and close the month with a number people can defend.",
    body: [
      {
        heading: "The situation",
        paragraphs: [
          "Construction and field companies run people across worksites. Hours lived in WhatsApp photos and Excel. Saturday and holiday overtime changed by city. Night extra was often forgotten. Month-end meant three people reconciling the same grid.",
          "They needed one place where the person on site records the day, the engineer confirms the hours, and the office closes payroll with Brazilian rules—municipality holidays, state overtime percentages, 50/60/70/100/110, night extra—while owners see cost per obra, not a dump of cells.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Staff Flow is that loop: obra → ponto → conferência → fechamento. Sites are tied to a municipality (IBGE), so holidays and overtime follow the place of work. Super-admin manages companies; each company has its own staff, obras, and rules. Access is role-based: super admin, owner, HR, supervisor, site admin, engineer, employee.",
          "Daily entries cover entry/exit, absence, medical certificate, overtime types, night hours, project allocation, and an edit history. Engineers review the sheet. Supervisors confer before close. The month opens and closes with a payroll breakdown, overtime adjustments per project, and a memorial of extra pay. Payments are pending or paid for the period.",
        ],
      },
      {
        heading: "What it covers",
        paragraphs: [
          "People with job role, salary, CPF, city/state, payment form, active or inactive. Invites by email. Dashboards. Excel export. Digest emails when timesheets are still pending. A rules engine for weekday / Saturday / Sunday-holiday overtime, an optional third-Saturday rule, and national, state, and municipal holidays.",
        ],
      },
      {
        heading: "What it is not",
        paragraphs: [
          "It is not a full eSocial/CLT payroll—no INSS, IRRF, benefits, vacation, or 13th. It is the operational layer for hours and additional pay (hora extra + noturno), then monthly close.",
        ],
      },
    ],
    linkLabel: "Read the case",
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

export function getIndexProjects(locale: Locale): Project[] {
  return [...getAllProjects(locale)].sort((a, b) =>
    b.startedAt.localeCompare(a.startedAt),
  );
}

export function getProjectBySlug(slug: string, locale: Locale): Project | null {
  return getAllProjects(locale).find((project) => project.slug === slug) ?? null;
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function filterProjects(
  projects: Project[],
  kind: ProjectKindFilter,
  tags: string[],
): Project[] {
  return projects.filter((project) => {
    if (kind !== "all" && project.kind !== kind) return false;
    return tags.every((tag) => project.stack.includes(tag));
  });
}

export function tagsForKind(
  projects: Project[],
  kind: ProjectKindFilter,
): string[] {
  const pool =
    kind === "all" ? projects : projects.filter((project) => project.kind === kind);
  return [...new Set(pool.flatMap((project) => project.stack))];
}
