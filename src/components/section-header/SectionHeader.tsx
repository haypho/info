import './SectionHeader.scss';
import React, { FC } from 'react';

export interface SectionHeaderProps {
  title: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title }: SectionHeaderProps) => (
  <div className="section-header">
    <p className="section-header-title">{title}</p>
  </div>
);

export default SectionHeader;
