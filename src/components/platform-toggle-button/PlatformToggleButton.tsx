import './PlatformToggleButton.scss';
import React, { FC, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

export interface PlatformToggleButtonProps {
  onChange?(platform: 'ios' | 'android'): void;
}

const PlatformToggleButton: FC<PlatformToggleButtonProps> = ({
  onChange,
}: PlatformToggleButtonProps) => {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

  const togglePlatform = useCallback((newPlatform: 'ios' | 'android') => {
    if (platform !== newPlatform) {
      setPlatform(newPlatform);
      if (onChange) {
        onChange(newPlatform);
      }
    }
  }, [platform, setPlatform]);

  return (
    <div className="platform-toggle-button">
      <button
        className={['toggle-button', 'ios', platform === 'ios' ? 'active' : ''].join(' ')}
        type="button"
        onClick={() => togglePlatform('ios')}
      >
        <FontAwesomeIcon icon={faApple} />
      </button>
      <button
        className={['toggle-button', 'android', platform === 'android' ? 'active' : ''].join(' ')}
        type="button"
        onClick={() => togglePlatform('android')}
      >
        <FontAwesomeIcon icon={faAndroid} />
      </button>
    </div>
  );
};

export default PlatformToggleButton;
