import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import Avatar from '../../components/avatar';
import IconPrefix from '../../components/icon-prefix/IconPrefix';

const AboutMe: FC = () => (
  <div className="about-me">
    <Avatar src="/assets/images/profile.jpg" alt="profile" title="Hayden Phothong" subtitle="Software Engineer" />
    <IconPrefix icon={faEnvelope}>
      <a className="about-me-email" href="mailto:hphothong@gmail.com">hphothong@gmail.com</a>
    </IconPrefix>
  </div>
);

export default AboutMe;
