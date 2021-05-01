import './App.scss';
import React from 'react';
import AppFooter from './app-footer/AppFooter';
import AppHeader from '../components/app-header';
import Jumbotron from '../components/jumbotron';

const App: React.FC = () => (
  <>
    <AppHeader title="Hayden Phothong" />
    <Jumbotron />
    <div className="app-content" />
    <AppFooter />
  </>
);

export default App;
