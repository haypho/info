import {
  faGithub, faNodeJs, faNpm, faYarn,
} from '@fortawesome/free-brands-svg-icons';
import React, { FC, useCallback } from 'react';
import Card from '../../../components/card';
import PlatformLabel from '../../../components/platform-label';
import { ReactNativeWebCache } from '../../../constants';

const ReactNativeWebCacheCard: FC = () => {
  const FrontContent = useCallback(() => (
    <div>
      <p>{ReactNativeWebCache.description}</p>
      <strong>Tech Stack:</strong>
      <p>{ReactNativeWebCache.techStack}</p>
      <p>
        You can find this package on
        {' '}
        <a href={ReactNativeWebCache.npm.url} target="_blank" rel="noreferrer">NPM</a>
        {' '}
        and
        {' '}
        <a href={ReactNativeWebCache.yarn.url} target="_blank" rel="noreferrer">Yarn</a>
        .
      </p>
    </div>
  ), []);

  return (
    <Card
      className="project-card"
      title="React-Native Web Cache"
      iconRight={faGithub}
      onClickIconRight={() => window.open(ReactNativeWebCache.github.url, '_blank')}
      renderFrontContent={<FrontContent />}
      renderFrontFooter={<PlatformLabel customs={[faNodeJs, faNpm, faYarn]} />}
    />
  );
};

export default ReactNativeWebCacheCard;
