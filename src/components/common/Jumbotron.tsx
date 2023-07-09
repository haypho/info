import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import React, { FC } from "react";

const BackgroundImage = styled.div`
  background: no-repeat center url(${(props: { src: string }) => props.src});
  background-size: 100% auto;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  max-height: 30vh;
`;

export type JumbotronProps = {
  src: string;
  children?: string;
};

export const Jumbotron: FC<JumbotronProps> = ({ src, children }) => {
  return (
    <BackgroundImage src={src}>
      <Container maxWidth="md">
        {children && (
          <Typography
            variant="h1"
            color="white"
            fontSize="2rem"
            fontWeight={700}
            textAlign="right"
          >
            {children}
          </Typography>
        )}
      </Container>
    </BackgroundImage>
  );
};
