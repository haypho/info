import './App.scss';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Welcome from './welcome/Welcome';
import Projects from './projects/Projects';

const App: React.FC = () => (
  <HashRouter basename="/">
    <header className="app-header">
      <div className="container flex flex-col">
        <div className="app-title-area">
          <h2 className="app-title">Hayden Phothong</h2>
          <p className="app-subtitle">PERSONAL PORTFOLIO</p>
        </div>
        <Navigation />
      </div>
    </header>
    <div className="app-content container">
      <Route exact path="/" component={Welcome} />
      <Route path="/projects" component={Projects} />
    </div>
    <footer className="app-footer">
      <p>Hayden Phothong &copy; 2020</p>
    </footer>
  </HashRouter>
);

export default App;
