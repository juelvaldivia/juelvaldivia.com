import { DataService } from '../../../../src/core/dataService';
import {
  GetSocialNetworks,
  SocialNetworksRepository,
  SocialNetworksError
} from '../../../../src/core/socialNetwork';

describe('Core', () => {
  describe('SocialNetworks', () => {
    describe('Get Social Networks', () => {
      let repository: SocialNetworksRepository;
      let dataService: DataService;
      let getSocialNetworks: GetSocialNetworks;

      beforeEach(() => {
        repository = {
          all: jest.fn(),
        };

        dataService = {
          socialNetworks: repository,
        };

        getSocialNetworks = new GetSocialNetworks(dataService);
      });

      it('should return empty social networks', async () => {
        await getSocialNetworks.execute();

        expect(repository.all).toHaveBeenCalled();
      });

      test('should return social networks from repository', async () => {
        (repository.all as jest.Mock)
          .mockResolvedValue([
            { name: 'LinkedIn', url: 'https://linkedin.com' },
            { name: 'GitHub', url: 'https://github.com' },
          ]);

        const result = await getSocialNetworks.execute();

        expect(result).toEqual([
          { name: 'LinkedIn', url: 'https://linkedin.com' },
          { name: 'GitHub', url: 'https://github.com' },
        ]);
        expect(repository.all).toHaveBeenCalledTimes(1);
      });

      test('should throw an error when repository throws an error', async () => {
        (repository.all as jest.Mock)
          .mockRejectedValue(new Error('An error occurred'));

        await expect(getSocialNetworks.execute()).rejects.toThrow(SocialNetworksError);
        await expect(getSocialNetworks.execute()).rejects.toThrow('An error occurred');

        expect(repository.all).toHaveBeenCalledTimes(2);
      });
    });
  });
});
