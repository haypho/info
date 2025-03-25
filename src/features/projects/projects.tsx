import { PROJECTS } from "@/constants";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.href} project={project} />
      ))}
    </div>
  );
}
