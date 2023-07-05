import { SocialNetworks } from '../../../src/core/entities';

describe('Core', () => {
  describe('Entities', () => {
    describe('SocialNetworks', () => {
      it('should be empty social networks', () => {
        const socialNetworks: SocialNetworks = [];

        expect(Array.isArray(socialNetworks)).toBe(true);
      });

      it('should contain objects with name and url properties', () => {
        const socialNetworks: SocialNetworks = [
          { name: 'Facebook', url: 'https://www.facebook.com' },
          { name: 'Twitter', url: 'https://www.twitter.com' },
        ];

        expect(socialNetworks).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: expect.any(String), url: expect.any(String) })
          ])
        );
      });
    });
  });
});
