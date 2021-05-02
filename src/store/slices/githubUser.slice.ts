import { createSlice } from '@reduxjs/toolkit';
import fetchGithubUserByUsername from '../thunks/github-user/fetchGithubUserByUsername.thunk';

export type GithubUserState = {
  avatarUrl?: string;
  htmlUrl?: string;
  bio?: string | null;
  pending: boolean;
  rejected: boolean;
}

const initialState: GithubUserState = {
  avatarUrl: undefined,
  htmlUrl: undefined,
  bio: undefined,
  pending: false,
  rejected: false,
};

const slice = createSlice({
  name: 'githubUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGithubUserByUsername.pending, (state): GithubUserState => ({
      ...state,
      pending: true,
      rejected: false,
    }));

    builder.addCase(fetchGithubUserByUsername.fulfilled, (state, action): GithubUserState => ({
      ...state,
      pending: false,
      rejected: false,
      avatarUrl: action.payload.avatar_url,
      htmlUrl: action.payload.html_url,
      bio: action.payload.bio,
    }));

    builder.addCase(fetchGithubUserByUsername.rejected, (state): GithubUserState => ({
      ...state,
      pending: false,
      rejected: true,
    }));
  },
});

export const githubUserReducer = slice.reducer;
