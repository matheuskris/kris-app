export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  image?: string;
  gridSpan?: number;
};

const projects: Project[] = [
  {
    slug: "nexus-platform",
    title: "Nexus Platform",
    description:
      "A real-time data visualization engine processing millions of events per second with an immersive WebGL interface.",
    stack: ["React", "WebGL"],
    featured: true,
    gridSpan: 8,
  },
  {
    slug: "orbit-sdk",
    title: "Orbit SDK",
    description:
      "A type-safe toolkit for building resilient distributed systems.",
    stack: ["TypeScript"],
    featured: true,
    gridSpan: 4,
  },
  {
    slug: "core-services",
    title: "Core Services",
    description:
      "High-throughput microservices architecture powering enterprise logistics.",
    stack: ["gRPC"],
    featured: true,
    gridSpan: 5,
  },
  {
    slug: "design-system",
    title: "Design System",
    description:
      "A comprehensive component library establishing visual consistency across product suites.",
    stack: ["Next.js", "Tailwind"],
    featured: true,
    gridSpan: 7,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  return projects.find((project) => project.slug === slug) ?? null;
}
