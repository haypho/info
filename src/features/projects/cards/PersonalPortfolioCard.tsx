import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import React, { FC, useCallback } from 'react';
import Card from '../../../components/card';
import PlatformLabel from '../../../components/platform-label';
import { PersonalPortfolio } from '../../../constants';

const PersonalPortfolioCard: FC = () => {
  const FrontContent = useCallback(() => (
    <div>
      <p>{PersonalPortfolio.description}</p>
      <strong>Tech Stack:</strong>
      <p>{PersonalPortfolio.techStack}</p>
    </div>
  ), []);

  return (
    <Card
      title={PersonalPortfolio.name}
      className="project-card"
      iconRight={faGithub}
      onClickIconRight={() => window.open(PersonalPortfolio.github.url, '_blank')}
      renderFrontContent={<FrontContent />}
      renderFrontFooter={<PlatformLabel custom={faReact} />}
    />

  );
};

export default PersonalPortfolioCard;
