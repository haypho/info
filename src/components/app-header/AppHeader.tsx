import './AppHeader.scss';
import React from 'react';
import Container from '../container';

const AppHeader: React.FC = () => (
  <header className="app-header">
    <Container>
      <div className="app-title-area">
        <h2 className="app-title">Hayden Phothong</h2>
        <p className="app-subtitle">Personal Portfolio</p>
      </div>
    </Container>
  </header>
);

export default AppHeader;
