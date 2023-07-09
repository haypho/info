import {
  personalEmail,
  personalEmailURL,
  personalGithubURL,
  personalLinkedInURL,
} from "@/constants";
import styled from "@emotion/styled";
import { Email, GitHub, LinkedIn, PictureAsPdf } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { FC } from "react";

const FooterElement = styled.footer`
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};
`;

export const Footer: FC = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FooterElement backgroundColor={theme.palette.grey["300"]}>
      <Container>
        <Box
          display="flex"
          flexDirection={isMediumScreen ? "row" : "column"}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          paddingY={3}
        >
          <Box display="flex" gap={1} minWidth={200}>
            <Avatar alt="Hayden Phothong" src="profile.jpg" />
            <Box display="flex" flexDirection="column">
              <Typography>Hayden Phothong</Typography>
              <Typography variant="caption">Software Engineer</Typography>
            </Box>
          </Box>
          <Typography
            textAlign={isSmallScreen ? "center" : "left"}
            maxWidth={400}
            marginX={4}
          >
            Hello! 👋 I am a full-stack web engineer by trade. However, I am
            still fairly new to the industry, so I am trying to find my niche!
          </Typography>
          <Box
            display="flex"
            flexDirection={isSmallScreen || isMediumScreen ? "column" : "row"}
            gap={2}
          >
            <Box display="flex" gap={1} alignItems="center">
              <PictureAsPdf />
              <Link
                href="Résumé_Hayden_Phothong.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography>Résumé</Typography>
              </Link>
            </Box>
            <Box display="flex" gap={1} alignItems="center">
              <GitHub />
              <Link
                href={personalGithubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography>GitHub</Typography>
              </Link>
            </Box>
            <Box display="flex" gap={1} alignItems="center">
              <LinkedIn />
              <Link
                href={personalLinkedInURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography>LinkedIn</Typography>
              </Link>
            </Box>
            <Box display="flex" gap={1} alignItems="center">
              <Email />
              <Link
                href={personalEmailURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography>{personalEmail}</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" paddingY={1}>
          <em>
            <Typography>
              Hayden Phothong &copy; {new Date().getFullYear()}
            </Typography>
          </em>
        </Box>
      </Container>
    </FooterElement>
  );
};
