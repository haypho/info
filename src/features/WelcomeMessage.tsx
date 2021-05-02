import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import Container from '../components/container';
import SectionHeader from '../components/section-header';

const WelcomeMessage: FC = () => (
  <Container>
    <SectionHeader title="Welcome!" iconLeft={faBookOpen} />
    <p>Thank you for taking the time to look at my personal portfolio!</p>
  </Container>
);

export default WelcomeMessage;
