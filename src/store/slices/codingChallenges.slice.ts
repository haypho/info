import { createSlice } from '@reduxjs/toolkit';
import fetchAvailableDailyCodingProblems from '../thunks/coding-challenges/fetchAvailableDailyCodingProblems.thunk';

export type CodingChallengesState = {
  availableProblems: number[];
  pending: boolean;
  rejected: boolean;
}

const initialState: CodingChallengesState = {
  availableProblems: [],
  pending: false,
  rejected: false,
};

const slice = createSlice({
  name: 'codingChallenges',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAvailableDailyCodingProblems.pending, (state): CodingChallengesState => ({
      ...state,
      rejected: false,
      pending: true,
    }));

    builder.addCase(fetchAvailableDailyCodingProblems.fulfilled,
      (state, action): CodingChallengesState => ({
        ...state,
        rejected: false,
        pending: false,
        availableProblems: action.payload,
      }));

    builder.addCase(fetchAvailableDailyCodingProblems.rejected, (state): CodingChallengesState => ({
      ...state,
      pending: false,
      rejected: true,
    }));
  },
});

export const codingChallengesReducer = slice.reducer;
