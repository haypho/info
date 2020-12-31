import './Navigation.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
