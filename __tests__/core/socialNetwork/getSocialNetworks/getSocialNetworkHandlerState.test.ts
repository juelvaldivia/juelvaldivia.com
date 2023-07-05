import { DataService } from '../../../../src/core/dataService';
import { SocialNetworks } from '../../../../src/core/entities';
import {
  GetSocialNetworks,
  GetSocialNetworksHandlerState,
  SocialNetworksError,
  SocialNetworksRepository
} from '../../../../src/core/socialNetwork';

describe('Core', () => {
  describe('Social Network', () => {
    describe('Get Social Networks Handler State', () => {
      let repository: SocialNetworksRepository;
      let dataService: DataService;
      let getSocialNetworks: GetSocialNetworks;
      let socialNetworksHandleState: GetSocialNetworksHandlerState;

      beforeEach(() => {
        repository = {
          all: jest.fn(),
        };

        dataService = {
          socialNetworks: repository,
        };

        getSocialNetworks = new GetSocialNetworks(dataService);
        socialNetworksHandleState = new GetSocialNetworksHandlerState(getSocialNetworks);
      });

      describe('searchAll', () => {
        test('should change state to loaded with social networks', async () => {
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

        test('should change state to error when get social networks error occurs', async () => {
          const errorMessage = 'An error occurred';
          const error = new SocialNetworksError(errorMessage);

          getSocialNetworks.execute = jest.fn().mockRejectedValue(error);

          await socialNetworksHandleState.searchAll();

          expect(socialNetworksHandleState.state).toEqual({
            kind: 'ErrorGetSocialNetworksState',
            error: errorMessage
          });
        });

        test('should change state to error when unexpected error occurs', async () => {
          const error = new Error('Unexpected error');

          getSocialNetworks.execute = jest.fn().mockRejectedValue(error);

          await socialNetworksHandleState.searchAll();

          expect(socialNetworksHandleState.state).toEqual({
            kind: 'ErrorGetSocialNetworksState',
            error: 'Unexpected error'
          });
        });
      });
    });
  });
});
