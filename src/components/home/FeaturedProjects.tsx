import Link from "next/link";
import { CaseStudy } from "@/components/projects/CaseStudy";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";
import { getFeaturedProjects } from "@/lib/content/projects";
import { getSiteConfig } from "@/lib/content/site";

export function FeaturedProjects({ locale }: { locale: Locale }) {
  const projects = getFeaturedProjects(locale);
  const { work, chrome } = getSiteConfig(locale);

  return (
    <section id="projects" className="page-shell py-20 lg:py-28">
      <div className="reveal-item mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-headline-lg text-on-surface">{work.title}</h2>
          <p className="text-body-md mt-3 text-on-surface-variant">{work.subtitle}</p>
        </div>
        <Link
          href={localizeHref(locale, "/projects")}
          className="text-label-md shrink-0 text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          {chrome.seeAllProjects}
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <CaseStudy key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </section>
  );
}
