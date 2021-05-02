import './PlatformLabel.scss';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface PlatformLabelProps {
  ios?: boolean;
  android?: boolean;
  web?: boolean;
  custom?: IconProp;
}

const PlatformLabel: FC<PlatformLabelProps> = ({
  ios = false,
  android = false,
  web = false,
  custom,
}: PlatformLabelProps) => (
  <div className="platform-labels">
    {ios && (<FontAwesomeIcon className="platform-label ios" icon={faApple} />)}
    {android && (<FontAwesomeIcon className="platform-label android" icon={faAndroid} />)}
    {web && (<FontAwesomeIcon className="platform-label web" icon={faGlobe} />)}
    {custom && (<FontAwesomeIcon className="platform-label custom" icon={custom} />)}
  </div>
);

export default PlatformLabel;
