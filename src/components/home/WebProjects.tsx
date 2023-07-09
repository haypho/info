import React, { FC, useState } from "react";
import { Section } from "../common/Section";
import { Web } from "@mui/icons-material";
import { webProjects, WebProject } from "@/constants/webProject.constants";
import styled from "@emotion/styled";

const WebProjectIFrame = styled.iframe`
  width: 100%;
  border: none;
  height: 600px;
`;

export const WebProjects: FC = () => {
  const [webProject] = useState<WebProject>(webProjects.prefixTree);

  return (
    <Section icon={Web} title={`Web Projects (${webProject.name})`}>
      <WebProjectIFrame src={webProject.src} />
    </Section>
  );
};
