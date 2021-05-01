import './AppFooter.scss';
import React from 'react';
import Container from '../../components/container';
import AboutMe from './AboutMe';
import MyLinks from './MyLinks';

const AppFooter: React.FC = () => (
  <footer>
    <Container>
      <div className="app-footer-content">
        <div className="app-footer-content-sections">
          <AboutMe />
          <MyLinks />
        </div>
        <p className="app-footer-copyright">Hayden Phothong &copy; 2021</p>
      </div>
    </Container>
  </footer>
);

export default AppFooter;
