import { createAsyncThunk } from '@reduxjs/toolkit';
import { GithubUser } from '../../../models';
import GithubService from '../../../services/github.service';
import { RootState } from '../../reducer';

const fetchGithubUserByUsername = createAsyncThunk<
  GithubUser,
  string | undefined,
  { state: RootState}
  >(
    'githubUser/fetchByUsername',
    async (username?: string): Promise<GithubUser> => {
      const response = await GithubService.fetchUser(username);
      return response.data;
    },
    {
      condition: (_username, api) => !api.getState().githubUserReducer.pending,
    },
  );

export default fetchGithubUserByUsername;
