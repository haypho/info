import './Projects.scss';
import React, { FC } from 'react';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/container';
import SectionHeader from '../../components/section-header';
import ImageographyCard from './cards/ImageographyCard';
import PersonalPortfolioCard from './cards/PersonalPortfolioCard';
import ReactNativeWebCacheCard from './cards/ReactNativeWebCacheCard';

const Projects: FC = () => (
  <Container>
    <SectionHeader title="Projects" iconLeft={faProjectDiagram} />
    <div className="projects">
      <ImageographyCard />
      <ReactNativeWebCacheCard />
      <PersonalPortfolioCard />
    </div>
  </Container>
);

export default Projects;
