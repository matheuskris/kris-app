import Image from "next/image";
import { TransitionLink } from "@/components/motion/TransitionLink";
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
    <article className="page-shell py-16 lg:py-20">
      <TransitionLink
        href={localizeHref(locale, "/projects")}
        className="text-label-md inline-flex items-center gap-1.5 text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
      >
        {chrome.backToProjects}
      </TransitionLink>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-10">
        <header className="min-w-0 lg:col-span-7">
          <p className="text-label-sm text-outline">
            {project.kicker}
            {" · "}
            {pages.projects.kinds[project.kind]}
            {" · "}
            {project.period}
          </p>
          <h1
            className="project-title-shared text-headline-xl mt-3 text-on-surface"
            style={{ viewTransitionName: `project-title-${project.slug}` }}
          >
            {project.title}
          </h1>
          <p className="text-body-lg mt-4 text-on-surface-variant">
            {project.description}
          </p>
        </header>

        <aside className="lg:col-span-5 lg:row-span-2 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:self-start lg:overflow-y-auto">
          <div className="flex flex-col gap-8 rounded-2xl border border-outline-variant/40 bg-surface-container/60 p-6">
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {project.stack.map((tag) => (
                <span key={tag} className="text-label-sm text-outline">
                  {tag}
                </span>
              ))}
            </div>

            <ol className="flex flex-col gap-3">
              {project.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-baseline justify-between gap-3 border-b border-outline-variant/30 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-body-sm text-on-surface">
                    <span className="text-outline mr-2 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step.title}
                  </span>
                  <span className="text-code-sm shrink-0 text-outline">
                    {step.detail}
                  </span>
                </li>
              ))}
            </ol>

            <dl className="grid grid-cols-3 gap-3">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-label-sm text-outline">{stat.label}</dt>
                  <dd className="text-code-md mt-0.5 text-on-surface">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="grid gap-6 border-t border-outline-variant/40 pt-6">
              <div>
                <p className="text-label-sm text-outline">
                  {chrome.engineeringChallenge}
                </p>
                <p className="text-body-sm mt-2 text-on-surface-variant">
                  {project.challenge}
                </p>
              </div>
              <div>
                <p className="text-label-sm text-outline">{chrome.impactOutcome}</p>
                <p className="text-body-sm mt-2 text-on-surface">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0 lg:col-span-7">
          {project.images && project.images.length > 0 ? (
            <div className="flex flex-col gap-6">
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
                    sizes="(min-width: 1024px) 52rem, 100vw"
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

          <section
            className={
              project.images && project.images.length > 0
                ? "mt-14 border-t border-outline-variant/40 pt-10"
                : "border-t border-outline-variant/40 pt-10 lg:mt-14"
            }
          >
            <p className="text-label-sm text-outline">{chrome.theIdea}</p>
            <p className="text-body-lg mt-3 text-on-surface">{project.idea}</p>
          </section>

          <div className="mt-12 flex flex-col gap-12">
            {project.body.map((section) => (
              <section key={section.heading}>
                <h2 className="text-headline-sm text-on-surface">
                  {section.heading}
                </h2>
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
        </div>
      </div>
    </article>
  );
}
