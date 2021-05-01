import './App.scss';
import React from 'react';
import AppFooter from './app-footer/AppFooter';
import AppHeader from '../components/app-header';
import Jumbotron from '../components/jumbotron';
import WelcomeMessage from './WelcomeMessage';

const App: React.FC = () => (
  <>
    <AppHeader title="Hayden Phothong" />
    <Jumbotron title="Personal Portfolio" />
    <div className="app-content">
      <WelcomeMessage />
    </div>
    <AppFooter />
  </>
);

export default App;
