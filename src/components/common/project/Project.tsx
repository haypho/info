import type { Project as ProjectType } from "@/constants";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { FC } from "react";
import styled from "@emotion/styled";
import { Android, Apple, GitHub } from "@mui/icons-material";
import { ProjectLink } from "./ProjectLink";
import { faNpm, faYarn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectTechStack = styled.ul`
  margin: 0;
`;

export type ProjectProps = {
  project: ProjectType;
};

export const Project: FC<ProjectProps> = ({ project }) => (
  <Card raised>
    <CardContent>
      <Typography fontWeight={700} gutterBottom>
        {project.name}
      </Typography>
      <Typography gutterBottom>{project.description}</Typography>
      <Typography>Tech Stack:</Typography>
      <ProjectTechStack>
        {project.techStack.map((technology) => (
          <li key={technology}>
            <Typography>{technology}</Typography>
          </li>
        ))}
      </ProjectTechStack>
    </CardContent>
    <CardActions>
      <ProjectLink href={project.github?.url} icon={<GitHub />} />
      <ProjectLink
        href={project.npm?.url}
        icon={<FontAwesomeIcon icon={faNpm} width={24} height={24} />}
      />
      <ProjectLink
        href={project.yarn?.url}
        icon={<FontAwesomeIcon icon={faYarn} width={24} height={24} />}
      />
      <ProjectLink href={project.ios?.url} icon={<Apple />} />
      <ProjectLink href={project.android?.url} icon={<Android />} />
    </CardActions>
  </Card>
);
