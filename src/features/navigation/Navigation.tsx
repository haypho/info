import './Navigation.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
  </>
);

export default Navigation;
