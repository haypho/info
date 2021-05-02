import './App.scss';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppFooter from './app-footer/AppFooter';
import AppHeader from '../components/app-header';
import Jumbotron from '../components/jumbotron';
import WelcomeMessage from './WelcomeMessage';
import AppContentSection from '../components/app-content-section';
import Projects from './projects';
import fetchGithubUserByUsername from '../store/thunks/github-user/fetchGithubUserByUsername.thunk';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGithubUserByUsername());
  }, []);

  return (
    <>
      <AppHeader title="Hayden Phothong" />
      <Jumbotron title="Personal Portfolio" />
      <div className="app-content">
        <AppContentSection>
          <WelcomeMessage />
        </AppContentSection>
        <AppContentSection>
          <Projects />
        </AppContentSection>
      </div>
      <AppFooter />
    </>
  );
};

export default App;
