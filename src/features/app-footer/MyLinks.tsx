import './MyLinks.scss';
import React, { FC } from 'react';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import IconPrefix from '../../components/icon-prefix';

const MyLinks: FC = () => (
  <div className="my-links">
    <div className="my-links-anchor">
      <a href="https://www.github.com/hphothong" target="_blank" rel="noreferrer">
        <IconPrefix icon={faGithub}>GitHub</IconPrefix>
      </a>
    </div>
    <div className="my-links-anchor">
      <a href="https://www.linkedin.com/in/hayden-phothong-a2393312" target="_blank" rel="noreferrer">
        <IconPrefix icon={faLinkedinIn}>LinkedIn</IconPrefix>
      </a>
    </div>
  </div>
);

export default MyLinks;
