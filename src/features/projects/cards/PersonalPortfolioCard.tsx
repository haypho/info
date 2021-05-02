import React, { FC } from 'react';
import Card from '../../../components/card';
import PlatformLabel from '../../../components/platform-label';

const PersonalPortfolioCard: FC = () => (
  <Card
    title="Personal Portfolio"
    className="project-card"
    renderFrontFooter={<PlatformLabel web />}
  />
);

export default PersonalPortfolioCard;
