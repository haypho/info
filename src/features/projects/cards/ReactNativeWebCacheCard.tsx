import React, { FC } from 'react';
import Card from '../../../components/card';
import PlatformLabel from '../../../components/platform-label';

const ReactNativeWebCacheCard: FC = () => (
  <Card
    className="project-card"
    title="React-Native Web Cache"
    renderFrontContent={<div>hello</div>}
    renderFrontFooter={<PlatformLabel ios android />}
  />
);

export default ReactNativeWebCacheCard;
