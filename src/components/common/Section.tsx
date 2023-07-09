import React, { FC, ReactNode } from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import { Box, Container, Divider, Typography } from "@mui/material";
import styled from "@emotion/styled";

const PrimaryDivider = styled(Divider)`
  margin-bottom: 1em;
`;

export type SectionProps = {
  icon: SvgIconComponent;
  title: string;
  children?: ReactNode;
};

export const Section: FC<SectionProps> = ({ icon: Icon, title, children }) => (
  <Container maxWidth="md">
    <Box display="flex" gap={1} marginTop={4}>
      <Icon color="primary" />
      <Typography
        variant="h2"
        fontSize="1.5rem"
        fontWeight={700}
        color="primary"
      >
        {title}
      </Typography>
    </Box>
    <Box>
      <PrimaryDivider />
    </Box>
    {children}
  </Container>
);
