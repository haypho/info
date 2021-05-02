import { createAsyncThunk } from '@reduxjs/toolkit';
import GithubService from '../../../services/github.service';
import { RootState } from '../../reducer';

const fetchAvailableDailyCodingProblems = createAsyncThunk<
  number[],
  undefined,
  { state: RootState}
  >(
    'dailyCodingProblem/fetchAvailable',
    (): Promise<number[]> => GithubService.fetchAvailableDailyCodingProblems(),
    {
      condition: (_username, api) => !api.getState().codingChallengesReducer.pending,
    },
  );

export default fetchAvailableDailyCodingProblems;
