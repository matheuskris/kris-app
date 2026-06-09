import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/content/projects";

const delayClasses = ["delay-100", "delay-200", "delay-100", "delay-200"];

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="projects"
      className="mx-auto max-w-container-max px-gutter py-xl"
    >
      <h2 className="reveal-item text-headline-lg mb-lg">Featured Projects</h2>

      <div className="grid auto-rows-[300px] grid-cols-1 gap-md md:grid-cols-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            delayClass={delayClasses[index] ?? ""}
          />
        ))}
      </div>
    </section>
  );
}
