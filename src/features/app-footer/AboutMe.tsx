import './AboutMe.scss';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../components/avatar';
import { RootState } from '../../store';
import ProfileImage from '../../assets/images/profile.jpg';

const fallbackBio = 'Hello! 👋 I am a full-stack web engineer by trade. However, I am still fairly new to the industry, so I am trying to find my niche!';

const AboutMe: FC = () => {
  const { avatarUrl, bio } = useSelector((state: RootState) => state.githubUserReducer);

  return (
    <div className="about-me">
      {avatarUrl && (<Avatar src={avatarUrl} fallback={ProfileImage} alt="profile" title="Hayden Phothong" subtitle="Software Engineer" />)}
      <p className="about-me-bio">{bio ?? fallbackBio}</p>
    </div>
  );
};

export default AboutMe;
