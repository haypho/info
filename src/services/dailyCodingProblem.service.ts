import axios from 'axios';
import { DailyCodingProblem } from '../models/dailyCodingProblem';
import { GithubRepoContent } from '../models/githubRepoContent';
import GithubService from './github.service';

export default class DailyCodingProblemService {
  private static parseContents(contents: GithubRepoContent[]) {
    let prompt: GithubRepoContent | undefined;
    let solution: GithubRepoContent | undefined;
    let tests: GithubRepoContent | undefined;
    contents.forEach((file) => {
      if (file.name === 'problem.md') {
        prompt = file;
      } else if (file.name === 'solution.ts') {
        solution = file;
      } else if (file.name === 'solution.test.ts') {
        tests = file;
      }
    });
    return { prompt, solution, tests };
  }

  private static async buildDailyCodingProblem(
    promptDownloadUrl: string,
    solutionDownloadUrl: string,
    testsDownloadUrl: string,
  ): Promise<DailyCodingProblem> {
    const dailyCodingProblem: DailyCodingProblem = {
      problem: '',
      solution: '',
      tests: '',
    };
    const promises = [
      axios.get(promptDownloadUrl).then((res) => { dailyCodingProblem.problem = res.data; }),
      axios.get(solutionDownloadUrl).then((res) => { dailyCodingProblem.solution = res.data; }),
      axios.get(testsDownloadUrl).then((res) => { dailyCodingProblem.tests = res.data; }),
    ];

    await Promise.all(promises);

    return dailyCodingProblem;
  }

  public static fetchByProblemNumber(number: number): Promise<DailyCodingProblem> {
    return new Promise((resolve, reject) => GithubService.fetchDailyCodingProblem(number)
      .then((contents) => {
        const { prompt, solution, tests } = DailyCodingProblemService.parseContents(contents.data);
        if (!prompt?.download_url || !solution?.download_url || !tests?.download_url) {
          return reject(new Error(`Unable to find Daily Coding Problem #${number}`));
        }
        return DailyCodingProblemService
          .buildDailyCodingProblem(prompt.download_url, solution.download_url, tests.download_url)
          .then((problem) => resolve(problem))
          .catch((e) => reject(e));
      })
      .catch((e) => reject(e)));
  }
}
