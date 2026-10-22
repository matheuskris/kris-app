import type { Locale } from "@/lib/i18n/locales";
import {
  getEarlyCareerNote,
  getExperiences,
} from "@/lib/content/experience";
import { getSiteConfig } from "@/lib/content/site";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const experiences = getExperiences(locale);
  const earlyCareer = getEarlyCareerNote(locale);
  const { experience } = getSiteConfig(locale);

  return (
    <section id="experience" className="page-shell py-20 lg:py-28">
      <div className="reveal-item mb-14 max-w-2xl">
        <h2 className="text-headline-lg text-on-surface">{experience.title}</h2>
        <p className="text-body-md mt-3 text-on-surface-variant">
          {experience.subtitle}
        </p>
      </div>

      <div className="reveal-item relative pl-7">
        <span
          className="timeline-spine absolute top-1 bottom-2 left-0 w-px bg-outline-variant"
          aria-hidden
        />
        <div className="flex flex-col gap-12">
          {experiences.map((entry) => (
            <article key={entry.id} className="relative">
              <span
                className="absolute top-1.5 -left-[29px] h-1.5 w-1.5 rounded-full bg-primary"
                aria-hidden
              />
              <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                <div className="md:w-48 md:shrink-0">
                  <p className="text-label-sm text-outline">{entry.period}</p>
                  <h3 className="text-headline-sm mt-2 text-on-surface">
                    {entry.company}
                  </h3>
                  <p className="text-body-sm mt-1 text-on-surface-variant">
                    {entry.role}
                  </p>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-body-md text-on-surface-variant">
                    {entry.summary}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-body-sm text-on-surface-variant"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-label-sm text-outline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-body-sm mt-12 text-on-surface-variant">
          <span className="text-outline">{earlyCareer.period}</span>
          {" · "}
          <span className="text-on-surface">{earlyCareer.label}</span>
          {" — "}
          {earlyCareer.description}
        </p>
      </div>
    </section>
  );
}
