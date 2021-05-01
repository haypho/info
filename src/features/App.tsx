import React from 'react';
import AppFooter from './app-footer/AppFooter';
import AppHeader from '../components/app-header';
import AppContent from '../components/app-content';

const App: React.FC = () => (
  <>
    <AppHeader />
    <AppContent />
    <AppFooter />
  </>
);

export default App;
