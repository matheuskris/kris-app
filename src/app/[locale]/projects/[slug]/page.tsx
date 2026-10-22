import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/content/projects";
import { getSiteConfig } from "@/lib/content/site";
import { isLocale } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const project = getProjectBySlug(slug, locale);
  if (!project) return {};

  const site = getSiteConfig(locale);
  const title = `${project.title} — ${site.brandName}`;

  const cover = project.images?.[0];

  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      type: "article",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      ...(cover
        ? {
            images: [
              {
                url: cover.src,
                width: cover.width,
                height: cover.height,
                alt: cover.alt,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const project = getProjectBySlug(slug, locale);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-canvas pt-16">
      <ProjectDetail project={project} locale={locale} />
    </main>
  );
}
