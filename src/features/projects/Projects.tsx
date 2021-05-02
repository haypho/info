import './Projects.scss';
import React, { FC } from 'react';
import Container from '../../components/container';
import SectionHeader from '../../components/section-header';
import ImageographyCard from './cards/ImageographyCard';
import PersonalPortfolioCard from './cards/PersonalPortfolioCard';

const Projects: FC = () => (
  <Container>
    <SectionHeader title="Projects" />
    <div className="projects">
      <PersonalPortfolioCard />
      <ImageographyCard />
      <ImageographyCard />
      <ImageographyCard />
      <ImageographyCard />
      <ImageographyCard />
    </div>
  </Container>
);

export default Projects;
