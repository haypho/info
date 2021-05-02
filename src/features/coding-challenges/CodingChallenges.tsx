import { faCode } from '@fortawesome/free-solid-svg-icons';
import React, {
  FC, useEffect, useLayoutEffect, useState,
} from 'react';
import Prism from 'prismjs';
import Container from '../../components/container';
import SectionHeader from '../../components/section-header';
import { DailyCodingProblem } from '../../models/dailyCodingProblem';
import DailyCodingProblemService from '../../services/dailyCodingProblem.service';
import Pagination from '../../components/pagination';

const CodingChallenges: FC = () => {
  const [problem, setProblem] = useState<DailyCodingProblem>();

  useEffect(() => {
    DailyCodingProblemService.fetchByProblemNumber(1).then(setProblem);
  }, []);

  useLayoutEffect(() => {
    Prism.highlightAll();
  }, [problem]);

  return (
    <Container>
      <SectionHeader title="Coding Challenges!" iconLeft={faCode} />
      <Pagination page={1} pageCount={10}>
        <pre className="line-numbers">
          <code className="language-md">{problem?.problem}</code>
        </pre>
        <pre className="line-numbers">
          <code className="language-ts">{problem?.solution}</code>
        </pre>
        <pre className="line-numbers">
          <code className="language-ts">{problem?.tests}</code>
        </pre>
      </Pagination>
    </Container>
  );
};
export default CodingChallenges;
