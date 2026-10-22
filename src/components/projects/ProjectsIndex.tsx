"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Project, ProjectKindFilter } from "@/lib/content/projects";
import { filterProjects, tagsForKind } from "@/lib/content/projects";
import { getSiteConfig } from "@/lib/content/site";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";

const kindOrder: ProjectKindFilter[] = [
  "all",
  "full-time",
  "contract",
  "personal",
];

function chipClass(active: boolean) {
  return `rounded-full border px-3 py-1 text-label-sm transition-colors ${
    active
      ? "border-outline bg-surface-container-high text-on-surface"
      : "border-outline-variant/50 text-outline hover:border-outline-variant hover:text-on-surface"
  }`;
}

export function ProjectsIndex({
  projects,
  locale,
}: {
  projects: Project[];
  locale: Locale;
}) {
  const { pages } = getSiteConfig(locale);
  const copy = pages.projects;
  const [kind, setKind] = useState<ProjectKindFilter>("all");
  const [tags, setTags] = useState<string[]>([]);

  const availableTags = useMemo(() => tagsForKind(projects, kind), [projects, kind]);

  const visible = useMemo(
    () => filterProjects(projects, kind, tags),
    [projects, kind, tags],
  );

  function selectKind(next: ProjectKindFilter) {
    const nextTags = tagsForKind(projects, next);
    const allowed = new Set(nextTags);
    setKind(next);
    setTags((current) => current.filter((tag) => allowed.has(tag)));
  }

  function toggleTag(tag: string) {
    setTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag],
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-label-sm text-outline">{copy.kindLabel}</p>
          <div
            className="mt-2 flex flex-wrap gap-2"
            role="radiogroup"
            aria-label={copy.kindLabel}
          >
            {kindOrder.map((value) => {
              const active = kind === value;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => selectKind(value)}
                  className={chipClass(active)}
                >
                  {copy.kinds[value]}
                </button>
              );
            })}
          </div>
        </div>

        {availableTags.length > 0 ? (
          <div>
            <p className="text-label-sm text-outline">{copy.tagsLabel}</p>
            <div
              className="mt-2 flex flex-wrap gap-2"
              role="group"
              aria-label={copy.tagsLabel}
            >
              {availableTags.map((tag) => {
                const active = tags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleTag(tag)}
                    className={chipClass(active)}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      <p className="text-label-sm mt-10 text-outline" aria-live="polite">
        {copy.shown.replace("{count}", String(visible.length))}
      </p>

      {visible.length === 0 ? (
        <p className="text-body-md mt-6 max-w-xl text-on-surface-variant">
          {copy.empty}
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-outline-variant/40 border-y border-outline-variant/40">
          {visible.map((project) => {
            const proof = project.stats[0];
            return (
              <li key={project.slug} id={project.slug}>
                <article className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-8">
                    <h2 className="text-headline-md text-on-surface">
                      <Link
                        href={localizeHref(locale, `/projects/${project.slug}`)}
                        className="underline decoration-transparent underline-offset-4 hover:text-primary hover:decoration-primary/30"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-label-sm mt-2 text-outline">
                      {project.kicker}
                      {" · "}
                      {copy.kinds[project.kind]}
                      {" · "}
                      {project.period}
                    </p>
                    <p className="text-body-md mt-3 max-w-prose text-on-surface-variant">
                      {project.description}
                    </p>
                    {proof ? (
                      <p className="text-code-sm mt-4 text-on-surface">
                        {proof.value}
                        <span className="text-outline"> {proof.label}</span>
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap content-start gap-x-3 gap-y-1 lg:col-span-4 lg:justify-end lg:pt-1">
                    {project.stack.map((tag) => (
                      <span key={tag} className="text-label-sm text-outline">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
