import { createSlice } from '@reduxjs/toolkit';
import { DailyCodingProblem } from '../../models/dailyCodingProblem';
import fetchDailyCodingProblem from '../thunks/coding-challenges/fetchDailyCodingProblem.thunk';

export type CurrentCodingChallengeState = {
  currentProblem?: DailyCodingProblem;
  pending: boolean;
  rejected: boolean;
}

const initialState: CurrentCodingChallengeState = {
  pending: false,
  rejected: false,
};

const slice = createSlice({
  name: 'codingChallenges',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDailyCodingProblem.pending, (state): CurrentCodingChallengeState => ({
      ...state,
      rejected: false,
      pending: true,
    }));

    builder.addCase(fetchDailyCodingProblem.fulfilled,
      (state, action): CurrentCodingChallengeState => ({
        ...state,
        rejected: false,
        pending: false,
        currentProblem: action.payload,
      }));

    builder.addCase(fetchDailyCodingProblem.rejected, (state): CurrentCodingChallengeState => ({
      ...state,
      pending: false,
      rejected: true,
    }));
  },
});

export const currentCodingChallengeReducer = slice.reducer;
