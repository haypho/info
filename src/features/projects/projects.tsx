import { PROJECTS } from "@/constants";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.href} project={project} />
      ))}
    </div>
  );
}
