import { DataError, SocialNetworksInMemory } from '../../../src/core/data';

describe('SocialNetworksInMemory', () => {
  let repository: SocialNetworksInMemory;

  beforeEach(() => {
    repository = new SocialNetworksInMemory(null);
  });

  describe('all', () => {
    test('should return all social networks', async () => {
      const result = await repository.all();

      expect(result).toEqual([
        { name: 'linkedin', url: 'https://linkedin.com/in/juelvaldivia' },
        { name: 'github', url: 'https://github.com/juelvaldivia' },
        { name: 'twitter', url: 'https://twitter.com/juelvaldivia' },
      ]);
    });

    test('should return empty array if no items were provided', async () => {
      repository = new SocialNetworksInMemory([]);

      const result = await repository.all();

      expect(result).toEqual([]);
    });

    test('should throw DataError when an error occurs', async () => {
      repository['getItems'] = jest.fn().mockImplementation(() => {
        throw new Error('Some error message');
      });

      await expect(repository.all()).rejects.toThrow(DataError);
      await expect(repository.all()).rejects.toThrow('Some error message');
    });
  });
});
