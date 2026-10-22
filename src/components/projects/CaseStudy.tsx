import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";
import type { Project } from "@/lib/content/projects";
import { getSiteConfig } from "@/lib/content/site";

export function CaseStudy({
  project,
  locale,
  anchor = false,
}: {
  project: Project;
  locale: Locale;
  anchor?: boolean;
}) {
  const flipped = project.visual === "geo";
  const { chrome } = getSiteConfig(locale);

  return (
    <article
      id={anchor ? project.slug : undefined}
      className="case-enter reveal-item sheen grid items-start gap-8 rounded-2xl border border-outline-variant/40 bg-surface-container/60 p-6 lg:grid-cols-12 lg:p-10"
    >
      <div
        className={`flex flex-col gap-4 lg:col-span-7 ${flipped ? "order-1 lg:order-2" : ""}`}
      >
        <p className="text-label-sm text-outline">{project.kicker}</p>
        <h3 className="text-headline-md text-on-surface">{project.title}</h3>
        <p className="text-body-md text-on-surface-variant">{project.description}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((tag) => (
            <span key={tag} className="text-label-sm text-outline">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-label-sm text-outline">{chrome.engineeringChallenge}</p>
            <p className="text-body-sm mt-1 text-on-surface-variant">
              {project.challenge}
            </p>
          </div>
          <div>
            <p className="text-label-sm text-outline">{chrome.impactOutcome}</p>
            <p className="text-body-sm mt-1 text-on-surface">{project.outcome}</p>
          </div>
        </div>
        {!anchor && (
          <Link
            href={localizeHref(locale, `/projects/${project.slug}`)}
            className="text-label-md mt-1 inline-flex items-center gap-1.5 text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            {project.linkLabel}
          </Link>
        )}
      </div>

      <div className={`lg:col-span-5 ${flipped ? "order-2 lg:order-1" : ""}`}>
        <div className="flex flex-col gap-5">
          <ol className="flex flex-col gap-3">
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
                <dd className="text-code-md mt-0.5 text-on-surface">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}
