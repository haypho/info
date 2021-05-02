import axios, { AxiosResponse } from 'axios';
import { GithubUser } from '../models';
import { GithubRepoContent } from '../models/githubRepoContent';

export default class GithubService {
  static BaseURL = 'https://api.github.com';

  static GithubUsername = 'hphothong';

  public static fetchUser =
    (username: string = GithubService.GithubUsername): Promise<AxiosResponse<GithubUser>> => {
      const url = `${GithubService.BaseURL}/users/${username}`;
      return axios.get(url);
    }

  public static fetchDailyCodingProblem =
    async (problemNumber: number): Promise<AxiosResponse<GithubRepoContent[]>> => {
      const path = `src/daily-coding-problem/problem-${problemNumber}`;
      const url = `${GithubService.BaseURL}/repos/${GithubService.GithubUsername}/coding-challenges/contents/${path}`;
      return axios.get(url);
    }
}
