import Axios from 'axios';
import GithubService from '../../src/services/github.service';

describe('when fetching available daily coding problems', () => {
  it('should handle multiple digit problems', async () => {
    const axiosSpy = jest.spyOn(Axios, 'get');
    axiosSpy.mockImplementation(() => new Promise((resolve) => resolve({
      data: [
        {
          name: 'problem-1',
        },
        {
          name: 'problem-10',
        },
      ],
    })));

    const problems = await GithubService.fetchAvailableDailyCodingProblems();

    expect(problems).toStrictEqual([1, 10]);
  });
});
