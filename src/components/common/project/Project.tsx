import type { Project as ProjectType } from "@/constants";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Android, Apple, GitHub } from "@mui/icons-material";
import { ProjectLink } from "./ProjectLink";
import { faNpm, faYarn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Box display="flex" flexWrap="wrap" gap={1}>
        {project.techStack.map((technology) => (
          <Chip
            key={technology}
            label={technology}
            variant="outlined"
            size="small"
          />
        ))}
      </Box>
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
