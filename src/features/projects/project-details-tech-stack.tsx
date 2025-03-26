import { Badge } from "@/components/ui/badge";

export type ProjectDetailsTechStackProps = {
  techStack?: string[];
};

export const ProjectDetailsTechStack = (
  props: ProjectDetailsTechStackProps,
) => {
  if (!props.techStack) {
    return null;
  }
  return (
    <div className="flex flex-row flex-wrap gap-2 my-2">
      {props.techStack.map((tech) => (
        <Badge key={tech} className="font-bold">
          {tech}
        </Badge>
      ))}
    </div>
  );
};
