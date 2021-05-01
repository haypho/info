import './AppHeader.scss';
import React from 'react';
import Container from '../container';

export interface AppHeaderProps {
  title?: string;
  subtitle?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subtitle }: AppHeaderProps) => (
  <header className="app-header">
    <Container>
      <div className="app-title-area">
        {title && (<h1 className="app-title">{title}</h1>)}
        {subtitle && (<p className="app-subtitle">{subtitle}</p>)}
      </div>
    </Container>
  </header>
);

export default AppHeader;
