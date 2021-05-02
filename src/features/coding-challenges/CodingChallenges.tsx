import './CodingChallenges.scss';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import React, {
  FC, useEffect, useLayoutEffect, useState,
} from 'react';
import Prism from 'prismjs';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/container';
import SectionHeader from '../../components/section-header';
import Pagination from '../../components/pagination';
import { RootState } from '../../store';
import fetchDailyCodingProblem from '../../store/thunks/coding-challenges/fetchDailyCodingProblem.thunk';

const CodingChallenges: FC = () => {
  const dispatch = useDispatch();
  const availableDailyCodingProblems = useSelector(
    (state: RootState) => state.codingChallengesReducer.availableProblems,
  );
  const problem = useSelector(
    (state: RootState) => state.currentCodingChallengeReducer.currentProblem,
  );
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchDailyCodingProblem(availableDailyCodingProblems[page - 1]));
  }, [dispatch, availableDailyCodingProblems, page]);

  useLayoutEffect(() => {
    Prism.highlightAll();
  }, [problem]);

  return (
    <Container>
      <SectionHeader title="Coding Challenges!" iconLeft={faCode} />
      {page > 0 && availableDailyCodingProblems.length > 0 && (
        <Pagination page={page} pageCount={availableDailyCodingProblems.length} onChange={setPage}>
          <pre className="line-numbers">
            <code className="language-md">{problem?.problem}</code>
          </pre>
          <p className="coding-challenge-title">Solution</p>
          <pre className="line-numbers">
            <code className="language-ts">{problem?.solution}</code>
          </pre>
          <p className="coding-challenge-title">Tests</p>
          <pre className="line-numbers">
            <code className="language-ts">{problem?.tests}</code>
          </pre>
        </Pagination>
      )}
    </Container>
  );
};
export default CodingChallenges;
