import './AppContent.scss';
import React from 'react';
import Avatar from '../avatar';
import Container from '../container';

const AppContent: React.FC = () => (
  <Container className="app-content">
    <Avatar src="/assets/images/profile.jpg" alt="profile" />
  </Container>
);

export default AppContent;
