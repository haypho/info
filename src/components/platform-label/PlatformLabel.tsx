import './PlatformLabel.scss';
import React, { FC, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface PlatformLabelProps {
  ios?: boolean;
  android?: boolean;
  web?: boolean;
  customs?: IconProp | IconProp[];
}

const PlatformLabel: FC<PlatformLabelProps> = ({
  ios = false,
  android = false,
  web = false,
  customs,
}: PlatformLabelProps) => {
  const CustomIcons = useCallback(() => {
    if (!customs) {
      return null;
    }
    if (Array.isArray(customs)) {
      return (
        <>
          {(customs as IconProp[]).map((custom, index) => <FontAwesomeIcon key={index} className="platform-label custom" icon={custom} />)}
        </>
      );
    }

    return <FontAwesomeIcon className="platform-label custom" icon={customs} />;
  }, [customs]);

  return (
    <div className="platform-labels">
      {ios && (<FontAwesomeIcon className="platform-label ios" icon={faApple} />)}
      {android && (<FontAwesomeIcon className="platform-label android" icon={faAndroid} />)}
      {web && (<FontAwesomeIcon className="platform-label web" icon={faGlobe} />)}
      <CustomIcons />
    </div>
  );
};

export default PlatformLabel;
