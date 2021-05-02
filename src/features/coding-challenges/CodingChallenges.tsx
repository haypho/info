import { faCode } from '@fortawesome/free-solid-svg-icons';
import React, { FC, useEffect, useState } from 'react';
import Container from '../../components/container';
import SectionHeader from '../../components/section-header';
import { DailyCodingProblem } from '../../models/dailyCodingProblem';
import DailyCodingProblemService from '../../services/dailyCodingProblem.service';

const CodingChallenges: FC = () => {
  const [problem, setProblem] = useState<DailyCodingProblem>();

  useEffect(() => {
    DailyCodingProblemService.fetchByProblemNumber(1).then(setProblem);
  }, []);

  return (
    <Container>
      <SectionHeader title="Coding Challenges!" iconLeft={faCode} />
      <div>Coding Challenges</div>
      <div>{problem?.problem}</div>
      <div>{problem?.solution}</div>
      <div>{problem?.tests}</div>
    </Container>

  );
};
export default CodingChallenges;
