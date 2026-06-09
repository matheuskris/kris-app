import {
  getEarlyCareerNote,
  getExperiences,
  type ExperienceEntry,
} from "@/lib/content/experience";

const delayClasses = ["", "delay-100", "delay-200", "delay-100"];

function ExperienceCard({
  entry,
  delayClass = "",
}: {
  entry: ExperienceEntry;
  delayClass?: string;
}) {
  return (
    <article
      className={`reveal-item ${delayClass} bento-card relative flex flex-col gap-md rounded-xl p-md md:flex-row md:gap-lg`}
    >
      <div className="md:w-48 md:shrink-0">
        <p className="text-code text-primary">{entry.period}</p>
        <h3 className="text-headline-md mt-1">{entry.company}</h3>
        <p className="text-body-md mt-1 text-on-surface-variant">{entry.role}</p>
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-body-md text-on-surface-variant">{entry.summary}</p>

        <ul className="mt-sm flex list-disc flex-col gap-xs pl-5 text-body-md text-on-surface-variant">
          {entry.highlights.map((highlight) => (
            <li key={highlight.slice(0, 48)}>{highlight}</li>
          ))}
        </ul>

        <div className="mt-md flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#1A1A1A] px-3 py-1 text-xs text-on-surface-variant text-code"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  const experiences = getExperiences();
  const earlyCareer = getEarlyCareerNote();

  return (
    <section
      id="experience"
      className="mx-auto max-w-container-max px-gutter py-xl"
    >
      <h2 className="reveal-item text-headline-lg mb-lg">Work Experience</h2>

      <div className="flex flex-col gap-md">
        {experiences.map((entry, index) => (
          <ExperienceCard
            key={entry.id}
            entry={entry}
            delayClass={delayClasses[index] ?? ""}
          />
        ))}

        <p className="reveal-item delay-200 text-body-md text-on-surface-variant">
          <span className="text-code text-primary">{earlyCareer.period}</span>
          {" · "}
          <span className="text-on-surface">{earlyCareer.label}</span>
          {" — "}
          {earlyCareer.description}
        </p>
      </div>
    </section>
  );
}
