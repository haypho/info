import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";

export const MainAppBar: FC = () => (
  <AppBar position="static">
    <Container maxWidth="md">
      <Toolbar>
        <Typography>Hayden Phothong</Typography>
      </Toolbar>
    </Container>
  </AppBar>
);
