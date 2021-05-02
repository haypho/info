import './IconPrefix.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, ReactNode } from 'react';

export interface IconPrefixProps {
  children?: ReactNode;
  color?: string;
  icon: IconProp
  onClickIcon?(): void;
  className?: string;
}

const IconPrefix: FC<IconPrefixProps> = ({
  children, icon, onClickIcon, color = '#5e5e5e', className,
}: IconPrefixProps) => (
  <div className={['icon-prefix', className].join(' ')}>
    <FontAwesomeIcon className="icon-prefix-icon" icon={icon} color={color} onClick={onClickIcon} />
    <div className="icon-prefix-content">
      {children}
    </div>
  </div>
);

export default IconPrefix;
