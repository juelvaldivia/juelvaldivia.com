import { HandlerState } from "../../common";

import { SocialNetworksState, socialNetworksInitialState } from "./socialNetworksState";
import { GetSocialNetworks, SocialNetworksError } from '../../core/socialNetwork';

export class SocialNetworksHandleState extends HandlerState<SocialNetworksState>{
  private getSocialNetworks: GetSocialNetworks;

  constructor(getSocialNetworks: GetSocialNetworks) {
    super(socialNetworksInitialState)

    this.getSocialNetworks = getSocialNetworks
  }

  async searchAll() {
    try {
      const socialNetworks = await this.getSocialNetworks.execute();

      this.changeState({
        kind: "LoadedSocialNetworksState",
        socialNetworks
      })
    } catch (error) {
      this.changeState(this.handleError(error))
    }
  }

  private handleError(error: any): SocialNetworksState {
    if (error instanceof SocialNetworksError) {
      return {
        kind: 'ErrorSocialNetworksState',
        error: error.message
      };
    }

    return {
      kind: 'ErrorSocialNetworksState',
      error: 'Unexpected error'
    };
}
}
