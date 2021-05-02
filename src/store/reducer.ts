import { combineReducers } from '@reduxjs/toolkit';
import { githubUserReducer } from './slices/githubUser.slice';

export const rootReducer = combineReducers({
  githubUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
