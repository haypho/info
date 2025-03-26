import { Project } from "@/constants";

export type ProjectDetailsProps = {
  project?: Project;
};

export const ProjectDetails = (props: ProjectDetailsProps) => {
  if (!props.project) {
    return null;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">{props.project.title}</h1>
      <p>{props.project.description}</p>
    </div>
  );
};
