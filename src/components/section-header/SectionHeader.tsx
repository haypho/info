import './SectionHeader.scss';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SectionHeaderProps {
  title: string;
  iconLeft?: IconProp;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, iconLeft }: SectionHeaderProps) => (
  <div className="section-header">
    {iconLeft && <FontAwesomeIcon className="section-header-icon-left" icon={iconLeft} />}
    <p className="section-header-title">{title}</p>
  </div>
);

export default SectionHeader;
