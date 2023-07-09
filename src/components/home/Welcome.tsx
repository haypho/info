import React, { FC } from "react";
import { Section } from "../common/Section";
import { WavingHand } from "@mui/icons-material";
import Link from "next/link";
import { Typography } from "@mui/material";
import { personalLinkedInURL } from "@/constants";

export const Welcome: FC = () => (
  <Section icon={WavingHand} title="Welcome!">
    <Typography>
      Thank you for taking the time to look at my personal portfolio. Below I
      have listed a few of my projects. These projects are the ones that taught
      me the most. I was able to dive deep into front-end frameworks, the
      JavaScript/TypeScript ecosystem, cloud solutions for data
      storage/retrieval, as well as the publishing process for the App Store and
      Play Store. If you would like to see my work history, check out my&nbsp;
      <Link
        href="Résumé_Hayden_Phothong.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        résumé
      </Link>
      &nbsp;or find me on&nbsp;
      <Link
        href={personalLinkedInURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>
      !
    </Typography>
  </Section>
);
