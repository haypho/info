import { Project } from "@/constants";
import { ProjectDetailsTechStack } from "./project-details-tech-stack";
import React from "react";
import { Construction } from "lucide-react";

export type ProjectDetailsProps = {
  project?: Project;
};

export const ProjectDetails = (props: ProjectDetailsProps) => {
  if (!props.project) {
    return null;
  }
  return (
    <div className="flex flex-col flex-1 gap-4">
      <div>
        <h1 className="text-3xl font-bold">{props.project.title}</h1>
        <ProjectDetailsTechStack techStack={props.project.techStack} />
      </div>
      {props.project.details.map((detail, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold">{detail.headline}</h2>
          <p>{detail.body}</p>
        </div>
      ))}
      {props.project.details.length === 0 && (
        <div className="flex flex-col flex-1 justify-center items-center">
          <div className="flex flex-row items-center gap-2">
            <Construction className="text-yellow-500" />
            <h2 className="text-2xl">Under Construction!</h2>
            <Construction className="text-yellow-500" />
          </div>
          <p className="text-center max-w-96">
            I am still ironing out the details for this one. Check back later
            for an updated view of the project.
          </p>
        </div>
      )}
    </div>
  );
};
