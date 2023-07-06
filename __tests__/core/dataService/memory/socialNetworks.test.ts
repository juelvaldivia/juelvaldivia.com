import { DataServiceError } from '../../../../src/core/dataService';
import { SocialNetworksInMemory } from '../../../../src/core/dataService/memory/socialNetworks';

describe('Core', () => {
  describe('Data Service', () => {
    describe('Memory', () => {
      describe('Social networks', () => {
        let repository: SocialNetworksInMemory;

        beforeEach(() => {
          repository = new SocialNetworksInMemory(null);
        });

        describe('Find all social networks', () => {
          test('should return all social networks', async () => {
            const result = await repository.all();

            expect(result).toEqual([
              { name: 'linkedin', url: 'https://linkedin.com/in/juelvaldivia' },
              { name: 'github', url: 'https://github.com/juelvaldivia' },
              { name: 'twitter', url: 'https://twitter.com/juelvaldivia' },
              { name: 'mastodon', url: 'https://mastodon.social/@juelvaldivia' },
              { name: 'medium', url: 'https://medium.com/@juelvaldivia' },
              { name: 'youtube', url: 'https://www.youtube.com/@juelvaldivia' },
              { name: 'instagram', url: 'https://www.instagram.com/juelvaldivia' }
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

            await expect(repository.all()).rejects.toThrow(DataServiceError);
            await expect(repository.all()).rejects.toThrow('Some error message');
          });
        });
      });
    });
  });
});
