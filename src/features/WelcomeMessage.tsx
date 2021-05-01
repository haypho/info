import React, { FC } from 'react';
import Container from '../components/container';
import SectionHeader from '../components/section-header';

const WelcomeMessage: FC = () => (
  <Container>
    <SectionHeader title="Welcome!" />
    <p>Thank you for taking the time to look at my personal portfolio!</p>
  </Container>
);

export default WelcomeMessage;
