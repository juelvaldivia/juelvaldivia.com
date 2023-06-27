
import {
  SocialNetworksHandleState
} from "../../src/containers/socialNetworks/socialNetworksHandleState";

import {
  GetSocialNetworks,
  SocialNetworks,
  SocialNetworksError,
  SocialNetworksRepository
} from "../../src/core/socialNetwork";

class MockSocialNetworksRepository implements SocialNetworksRepository {
  async all(): Promise<SocialNetworks> {
    return [];
  }
}

describe('SocialNetworksHandleState', () => {
  let getSocialNetworks: GetSocialNetworks;
  let socialNetworksHandleState: SocialNetworksHandleState;

  beforeEach(() => {
    const mockSocialNetworksRepository = new MockSocialNetworksRepository();

    getSocialNetworks = new GetSocialNetworks(mockSocialNetworksRepository);
    socialNetworksHandleState = new SocialNetworksHandleState(getSocialNetworks);
  });

  describe('searchAll', () => {
    test('should change state to LoadedSocialNetworksState with social networks', async () => {
      const socialNetworks: SocialNetworks = [
        { name: 'LinkedIn', url: 'https://linkedin.com' },
        { name: 'GitHub', url: 'https://github.com' },
      ];

      getSocialNetworks.execute = jest.fn().mockResolvedValue(socialNetworks);

      await socialNetworksHandleState.searchAll();

      expect(socialNetworksHandleState.state).toEqual({
        kind: 'LoadedSocialNetworksState',
        socialNetworks
      });
    });

    test('should change state to ErrorSocialNetworksState when SocialNetworksError occurs', async () => {
      const errorMessage = 'An error occurred';
      const error = new SocialNetworksError(errorMessage);

      getSocialNetworks.execute = jest.fn().mockRejectedValue(error);

      await socialNetworksHandleState.searchAll();

      expect(socialNetworksHandleState.state).toEqual({
        kind: 'ErrorSocialNetworksState',
        error: errorMessage
      });
    });

    test('should change state to ErrorSocialNetworksState with default error message when unexpected error occurs', async () => {
      const error = new Error('Unexpected error');

      getSocialNetworks.execute = jest.fn().mockRejectedValue(error);

      await socialNetworksHandleState.searchAll();

      expect(socialNetworksHandleState.state).toEqual({
        kind: 'ErrorSocialNetworksState',
        error: 'Unexpected error'
      });
    });
  });
});
