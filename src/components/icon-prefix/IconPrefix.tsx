import './IconPrefix.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, ReactNode } from 'react';

export interface IconPrefixProps {
  children?: ReactNode;
  icon: IconProp;
}

const IconPrefix: FC<IconPrefixProps> = ({ children, icon }: IconPrefixProps) => (
  <div className="icon-prefix">
    <FontAwesomeIcon className="icon-prefix-icon" icon={icon} />
    <div className="icon-prefix-content">
      {children}
    </div>
  </div>
);

export default IconPrefix;
