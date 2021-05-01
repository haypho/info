import './AppContentSection.scss';
import React, { FC, ReactNode } from 'react';

export interface AppContentSectionProps {
  children?: ReactNode;
}

const AppContentSection: FC<AppContentSectionProps> = ({ children }: AppContentSectionProps) => <div className="app-content-section">{children}</div>;

export default AppContentSection;
