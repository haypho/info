/* eslint-disable arrow-body-style */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { DailyCodingProblem } from '../../../models/dailyCodingProblem';
import DailyCodingProblemService from '../../../services/dailyCodingProblem.service';
import { RootState } from '../../reducer';

const fetchDailyCodingProblem = createAsyncThunk<
  DailyCodingProblem,
  number,
  { state: RootState}
  >(
    'dailyCodingProblem/fetch',
    (problem: number): Promise<DailyCodingProblem> => {
      return DailyCodingProblemService.fetchByProblemNumber(problem);
    },
    {
      condition: (_username, api) => !api.getState().codingChallengesReducer.pending,
    },
  );

export default fetchDailyCodingProblem;
