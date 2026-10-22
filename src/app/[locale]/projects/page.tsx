import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/projects/CaseStudy";
import { isLocale } from "@/lib/i18n/locales";
import { getAllProjects } from "@/lib/content/projects";
import { getSiteConfig } from "@/lib/content/site";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const projects = getAllProjects(locale);
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
      <section className="page-shell flex flex-col gap-8 pb-20">
        {projects.map((project) => (
          <CaseStudy key={project.slug} project={project} locale={locale} anchor />
        ))}
      </section>
    </main>
  );
}
