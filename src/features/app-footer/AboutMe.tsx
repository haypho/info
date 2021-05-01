import './AboutMe.scss';
import React, { FC } from 'react';
import Avatar from '../../components/avatar';

const AboutMe: FC = () => (
  <div className="about-me">
    <Avatar src="/assets/images/profile.jpg" alt="profile" title="Hayden Phothong" subtitle="Software Engineer" />
    <p className="about-me-message">
      Hello! I am a full-stack web engineer by trade. However,
      I am still relatively new to the industry, so I am looking for my niche!
    </p>
  </div>
);

export default AboutMe;
