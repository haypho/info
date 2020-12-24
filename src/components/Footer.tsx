import React from "react";
import styled from "styled-components";
import { useTheme } from "./theme";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 0 3px ${(props) => props.theme.colors.foreground};
`;

const Content = styled.div`
  padding: 1% 7%;
`;

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Content>footer</Content>
    </Container>
  );
};

export default Footer;
