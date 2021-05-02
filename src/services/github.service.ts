import axios, { AxiosResponse } from 'axios';
import { GithubUser } from '../models';

export default class GithubService {
  static BaseURL = 'https://api.github.com';

  static GithubUsername = 'hphothong';

  public static fetchUser = (username: string = GithubService.GithubUsername): Promise<AxiosResponse<GithubUser>> => axios.get(`${GithubService.BaseURL}/users/${username}`)
}
