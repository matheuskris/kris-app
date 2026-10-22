import { notFound } from "next/navigation";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";
import { isLocale } from "@/lib/i18n/locales";
import { getIndexProjects } from "@/lib/content/projects";
import { getSiteConfig } from "@/lib/content/site";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const projects = getIndexProjects(locale);
  const { pages } = getSiteConfig(locale);

  return (
    <main className="min-h-screen bg-canvas pt-16">
      <section className="page-shell py-20">
        <h1 className="text-headline-xl max-w-3xl text-on-surface">
          {pages.projects.title}
        </h1>
        <p className="text-body-lg mt-4 max-w-2xl text-on-surface-variant">
          {pages.projects.subtitle}
        </p>
      </section>
      <section className="page-shell pb-20">
        <ProjectsIndex projects={projects} locale={locale} />
      </section>
    </main>
  );
}
