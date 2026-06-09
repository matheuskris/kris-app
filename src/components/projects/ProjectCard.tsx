import type { Project } from "@/lib/content/projects";

const spanClasses: Record<number, string> = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  7: "md:col-span-7",
  8: "md:col-span-8",
};

type ProjectCardProps = {
  project: Project;
  delayClass?: string;
};

export function ProjectCard({ project, delayClass = "" }: ProjectCardProps) {
  const colSpan = spanClasses[project.gridSpan ?? 4] ?? "md:col-span-4";

  return (
    <article
      className={`reveal-item ${delayClass} bento-card group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl p-md ${colSpan}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#1A1A1A] px-3 py-1 text-xs text-on-surface-variant text-code"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-headline-md mb-2">{project.title}</h3>
        <p className="text-body-md max-w-md text-on-surface-variant">
          {project.description}
        </p>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          aria-label={`Open ${project.title}`}
          className="glass-icon-btn flex h-10 w-10 items-center justify-center rounded-full"
        >
          <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover:text-[#c2c1ff]">
            arrow_outward
          </span>
        </button>
      </div>
    </article>
  );
}
