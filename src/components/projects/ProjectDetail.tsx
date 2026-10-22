import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/projects";
import { getSiteConfig } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";

export function ProjectDetail({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const { chrome, pages } = getSiteConfig(locale);

  return (
    <article className="page-shell max-w-3xl py-16 lg:py-20">
      <Link
        href={localizeHref(locale, "/projects")}
        className="text-label-md inline-flex items-center gap-1.5 text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
      >
        {chrome.backToProjects}
      </Link>

      <p className="text-label-sm mt-10 text-outline">
        {project.kicker}
        {" · "}
        {pages.projects.kinds[project.kind]}
        {" · "}
        {project.period}
      </p>
      <h1 className="text-headline-xl mt-3 text-on-surface">{project.title}</h1>
      <p className="text-body-lg mt-4 text-on-surface-variant">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
        {project.stack.map((tag) => (
          <span key={tag} className="text-label-sm text-outline">
            {tag}
          </span>
        ))}
      </div>

      {project.images && project.images.length > 0 ? (
        <div className="mt-12 flex flex-col gap-6">
          {project.images.map((image, index) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container/60"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 768px) 48rem, 100vw"
                className="h-auto w-full"
                priority={index === 0}
              />
              {image.caption ? (
                <figcaption className="text-label-sm border-t border-outline-variant/30 px-4 py-3 text-outline">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : null}

      <section className="mt-14 border-t border-outline-variant/40 pt-10">
        <p className="text-label-sm text-outline">{chrome.theIdea}</p>
        <p className="text-body-lg mt-3 text-on-surface">{project.idea}</p>
      </section>

      <div className="mt-12 flex flex-col gap-12">
        {project.body.map((section) => (
          <section key={section.heading}>
            <h2 className="text-headline-sm text-on-surface">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-body-md text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <ol className="mt-14 flex flex-col gap-3 border-t border-outline-variant/40 pt-10">
        {project.steps.map((step, index) => (
          <li
            key={step.title}
            className="flex items-baseline justify-between gap-3 border-b border-outline-variant/30 pb-3"
          >
            <span className="text-body-sm text-on-surface">
              <span className="text-outline mr-2 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step.title}
            </span>
            <span className="text-code-sm shrink-0 text-outline">{step.detail}</span>
          </li>
        ))}
      </ol>

      <dl className="mt-8 grid grid-cols-3 gap-3">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-label-sm text-outline">{stat.label}</dt>
            <dd className="text-code-md mt-0.5 text-on-surface">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 grid gap-8 border-t border-outline-variant/40 pt-10 sm:grid-cols-2">
        <div>
          <p className="text-label-sm text-outline">{chrome.engineeringChallenge}</p>
          <p className="text-body-sm mt-2 text-on-surface-variant">
            {project.challenge}
          </p>
        </div>
        <div>
          <p className="text-label-sm text-outline">{chrome.impactOutcome}</p>
          <p className="text-body-sm mt-2 text-on-surface">{project.outcome}</p>
        </div>
      </div>
    </article>
  );
}
