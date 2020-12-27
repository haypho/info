import './App.scss';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Welcome from './welcome/Welcome';
import Projects from './projects/Projects';

const App = () => (
  <HashRouter basename="/">
    <Navigation />
    <Route exact path="/" component={Welcome} />
    <Route path="/projects" component={Projects} />
  </HashRouter>
);

export default App;
