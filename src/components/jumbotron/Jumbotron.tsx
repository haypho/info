import './Jumbotron.scss';
import React, { FC } from 'react';
import Container from '../container';

export interface JumbotronProps {
  title: string;
  subtitle?: string;
}

const Jumbotron: FC<JumbotronProps> = ({ title, subtitle }: JumbotronProps) => (
  <div className="jumbotron" style={{ backgroundImage: 'url(assets/images/notebook.jpg)' }}>
    <Container className="jumbotron-container">
      {title && (<h2 className="jumbotron-title">{title}</h2>)}
      {subtitle && (<p className="jumbotron-subtitle">{subtitle}</p>)}
    </Container>
  </div>
);

export default Jumbotron;
