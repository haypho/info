import { faCode } from '@fortawesome/free-solid-svg-icons';
import React, { FC, useEffect, useState } from 'react';
import Prism from 'prismjs';
import Container from '../../components/container';
import SectionHeader from '../../components/section-header';
import { DailyCodingProblem } from '../../models/dailyCodingProblem';
import DailyCodingProblemService from '../../services/dailyCodingProblem.service';

const CodingChallenges: FC = () => {
  const [problem, setProblem] = useState<DailyCodingProblem>();

  useEffect(() => {
    DailyCodingProblemService.fetchByProblemNumber(1).then(setProblem);
  }, []);

  useEffect(() => {
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    setTimeout(() => Prism.highlightAll(), 0);
  }, [problem]);

  return (
    <Container>
      <SectionHeader title="Coding Challenges!" iconLeft={faCode} />
      <div>Coding Challenges</div>
      <pre className="line-numbers">
        <code className="language-md">{problem?.problem}</code>
      </pre>
      <pre className="line-numbers">
        <code className="language-ts">{problem?.solution}</code>
      </pre>
      <pre className="line-numbers">
        <code className="language-ts">{problem?.tests}</code>
      </pre>
    </Container>

  );
};
export default CodingChallenges;
