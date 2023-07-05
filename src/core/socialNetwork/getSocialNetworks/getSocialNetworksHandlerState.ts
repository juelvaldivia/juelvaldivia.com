import { HandlerState } from '../../common';

import { SocialNetworksState, socialNetworksInitialState } from './getSocialNetworksState';
import { GetSocialNetworks } from './getSocialNetworks';
import { SocialNetworksError } from '../errors';

export class GetSocialNetworksHandlerState extends HandlerState<SocialNetworksState>{
  private getSocialNetworks: GetSocialNetworks;

  constructor(getSocialNetworks: GetSocialNetworks) {
    super(socialNetworksInitialState);

    this.getSocialNetworks = getSocialNetworks;
  }

  async searchAll() {
    try {
      const socialNetworks = await this.getSocialNetworks.execute();

      this.changeState({
        kind: 'LoadedSocialNetworksState',
        socialNetworks
      });
    } catch (error) {
      if (error instanceof Error) {
        this.changeState(this.handleError(error));
      }
    }
  }

  private handleError(error: Error): SocialNetworksState {
    if (error instanceof SocialNetworksError) {
      return {
        kind: 'ErrorGetSocialNetworksState',
        error: error.message
      };
    }

    return {
      kind: 'ErrorGetSocialNetworksState',
      error: 'Unexpected error'
    };
  }
}
