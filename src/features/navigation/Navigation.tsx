import './Navigation.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav className="navigation">
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
  </nav>
);

export default Navigation;
