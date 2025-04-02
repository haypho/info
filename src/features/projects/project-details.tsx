import { Project } from "@/constants";
import { ProjectDetailsTechStack } from "./project-details-tech-stack";
import React, { ReactNode } from "react";
import { Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectDetail } from "./project-detail";

export type ProjectDetailsProps = {
  project?: Project;
  children?: ReactNode;
};

export const ProjectDetails = (props: ProjectDetailsProps) => {
  if (!props.project) {
    return null;
  }
  return (
    <div className="flex flex-col flex-1 gap-4">
      <div>
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-3xl font-bold">{props.project.title}</h1>
          {props.project.github && (
            <Button asChild size="icon" variant="ghost">
              <Link href={props.project.github} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Button>
          )}
        </div>
        <ProjectDetailsTechStack techStack={props.project.techStack} />
      </div>
      {props.project.details.map((detail, index) =>
        index === 0 ? (
          <ProjectDetail key={index} {...detail}>
            {props.children}
          </ProjectDetail>
        ) : (
          <ProjectDetail key={index} {...detail} />
        ),
      )}
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
