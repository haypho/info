import { combineReducers } from '@reduxjs/toolkit';
import { githubUserReducer } from './slices/githubUser.slice';
import { codingChallengesReducer } from './slices/codingChallenges.slice';
import { currentCodingChallengeReducer } from './slices/currentCodingChallenge.slice';

export const rootReducer = combineReducers({
  githubUserReducer,
  codingChallengesReducer,
  currentCodingChallengeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
