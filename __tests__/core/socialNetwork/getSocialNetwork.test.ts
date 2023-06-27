import {
  GetSocialNetworks,
  SocialNetworksRepository,
  SocialNetworksError
} from '../../../src/core/socialNetwork';

describe('GetSocialNetworks', () => {
  let repository: SocialNetworksRepository;
  let getSocialNetworks: GetSocialNetworks;

  beforeEach(() => {
    repository = {
      all: jest.fn(),
    };
    getSocialNetworks = new GetSocialNetworks(repository);
  });

  describe('execute', () => {
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

    test('should throw SocialNetworksError when repository throws an error', async () => {
      (repository.all as jest.Mock)
        .mockRejectedValue(new Error('An error occurred'));

      await expect(getSocialNetworks.execute()).rejects.toThrow(SocialNetworksError);
      await expect(getSocialNetworks.execute()).rejects.toThrow('An error occurred');

      expect(repository.all).toHaveBeenCalledTimes(2);
    });
  });
});
