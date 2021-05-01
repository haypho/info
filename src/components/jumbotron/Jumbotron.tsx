import './Jumbotron.scss';
import React, { FC } from 'react';
import Container from '../container';

const Jumbotron: FC = () => (
  <div className="jumbotron" style={{ backgroundImage: 'url(assets/images/notebook.jpg)' }}>
    <Container className="jumbotron-container">
      <h2 className="jumbotron-title">Personal Portfolio</h2>
      <p className="jumbotron-subtitle">Welcome!</p>
    </Container>
  </div>
);

export default Jumbotron;
