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
      Thank you for taking the time to look at my personal portfolio!
      I have a few of my projects listed below! I try to spend most of my time
      working on these projects. I have found that working on them is
      the easiest way to learn! Natural languages, programming
      languages, frameworks, tools, new skills, you name it! I want to know it all!
    </p>
    <p>
      Eventually, I would like to specialize in a particular area in Software Engineering.
      Right now, I am reaching out to every area to get a feel for the spot where I shine brightest!
      If you would like to see my work history, check out my
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
