export type NavLink = {
  label: string;
  href: string;
  matchPath?: string;
};

export type SocialLink = {
  icon: "code" | "terminal" | "mail";
  href: string;
  label: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

/** Replace placeholder URLs and email before publishing. */
const links = {
  linkedin: "https://www.linkedin.com/in/matheuskris/",
  github: "https://github.com/matheuskris",
  email: "mailto:matheuskris@gmail.com",
} as const;

export const siteConfig = {
  brandName: "Matheus Krisciumas",
  tagline:
    "Software engineer building maintainable products for real business workflows.",
  hero: {
    headline: "Software engineer turning ambiguous problems into",
    highlight: "reliable products",
    headlineEnd: ".",
    subtitle:
      "I build full-stack systems with product sense—focused on clarity, maintainability, and the business problem behind the code. Remote, based in Brazil.",
    primaryCta: { label: "Connect on LinkedIn", href: links.linkedin },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },
  about: {
    title: "Hi, I'm Matheus.",
    paragraphs: [
      "I'm a software engineer who works on business and ecommerce workflows. I like understanding the problem first, then building systems that stay simple to reason about as they grow.",
      "I care about clear communication, reliable delivery with teams, and tying technical decisions to real business value—not just shipping code for its own sake.",
      "Outside of work, you'll find me playing guitar, staying consistent with fitness, and spending time with friends. That balance keeps me grounded and focused.",
    ],
    skills: [
      "Node.js / APIs",
      "TypeScript",
      "Full-Stack Product Work",
      "Systems Design",
      "Ecommerce Workflows",
    ],
    portraitUrl: "/Foto-perfil.jpeg",
    portraitAlt: "Matheus Krisciumas",
  },
  contact: {
    title: "Let's connect",
    subtitle:
      "The fastest way to reach me is on LinkedIn. Prefer email? Send a message below or write directly.",
    avatarUrl: "/avatar-site.jpeg",
    avatarAlt: "Matheus Krisciumas",
  },
  nav: [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  social: [
    { icon: "code", href: links.github, label: "GitHub" },
    { icon: "terminal", href: links.linkedin, label: "LinkedIn" },
    { icon: "mail", href: links.email, label: "Email" },
  ] satisfies SocialLink[],
  footer: {
    copyright: "© 2026 Matheus Krisciumas. Remote, based in Brazil.",
    links: [
      { label: "GitHub", href: links.github },
      { label: "LinkedIn", href: links.linkedin },
      { label: "Email", href: links.email },
    ] satisfies FooterLink[],
  },
} as const;
