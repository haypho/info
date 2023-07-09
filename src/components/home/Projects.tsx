import React, { FC } from "react";
import { Section } from "../common/Section";
import { Code } from "@mui/icons-material";
import { Project as ProjectType, projects } from "@/constants";
import { Project } from "../common/project/Project";
import { Grid } from "@mui/material";

export const Projects: FC = () => (
  <Section icon={Code} title="Projects">
    <Grid container spacing={2}>
      {Object.entries(projects).map(([key, project]: [string, ProjectType]) => (
        <Grid item key={key}>
          <Project project={project} />
        </Grid>
      ))}
    </Grid>
  </Section>
);
