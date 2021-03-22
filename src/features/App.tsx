import './App.scss';
import React from 'react';

const App: React.FC = () => (
  <>
    <header className="app-header">
      <div className="app-title-area">
        <h2 className="app-title">Hayden Phothong</h2>
        <p className="app-subtitle">PERSONAL PORTFOLIO</p>
      </div>
    </header>
    <img src="/assets/images/profile.jpg" alt="profile" />
    <footer className="app-footer">
      <p>Hayden Phothong &copy; 2020</p>
    </footer>
  </>
);

export default App;
