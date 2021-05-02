import { faCode } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import Container from '../../components/container';
import SectionHeader from '../../components/section-header';

const CodingChallenges: FC = () => (
  <Container>
    <SectionHeader title="Coding Challenges!" iconLeft={faCode} />
    <div>Coding Challenges</div>
  </Container>

);
export default CodingChallenges;
