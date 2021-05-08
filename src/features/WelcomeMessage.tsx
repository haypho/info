import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import Container from '../components/container';
import SectionHeader from '../components/section-header';
import Resume from '../assets/pdf/Résumé_Hayden_Phothong.pdf';
import { personalLinkedInURL } from '../constants';

const WelcomeMessage: FC = () => (
  <Container>
    <SectionHeader title="Welcome!" iconLeft={faBookOpen} />
    <p>
      Thank you for taking the time to look at my personal portfolio. Below I have listed
      a few of my projects. These projects are the ones that taught me the most. I was able
      to dive deep into front-end frameworks, the JavaScript/TypeScript ecosystem,
      cloud solutions for data storage/retrieval, as well as the publishing process for the
      App Store and Play Store. If you would like to see my work history, check out my
      {' '}
      <a href={Resume} target="_blank" rel="noreferrer">résumé</a>
      {' '}
      or find me on
      {' '}
      <a href={personalLinkedInURL} target="_blank" rel="noreferrer">LinkedIn</a>
      !
    </p>
  </Container>
);

export default WelcomeMessage;
