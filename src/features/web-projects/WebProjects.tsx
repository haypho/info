import "./WebProjects.scss";
import React, { FC } from "react";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import Container from "../../components/container";
import SectionHeader from "../../components/section-header";

const WebProjects: FC = () => {
  return (
    <Container>
      <SectionHeader title="Web Projects" iconLeft={faLaptop} />
      <iframe
        className="web-project"
        src="https://hphothong.github.io/prefix-tree-autocomplete"
      />
    </Container>
  );
};

export default WebProjects;
