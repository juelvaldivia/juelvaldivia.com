import { GetSocialNetworks } from '../../core/socialNetwork';
import { SocialNetworksHandleState } from './socialNetworksHandleState';
import { SocialNetworksInMemory } from '../../core/data/memory';

export function buildSocialNetworkHandleState(): SocialNetworksHandleState {
  const socialNetworkRepository = new SocialNetworksInMemory(null);
  const getSocialNetworksUseCase = new GetSocialNetworks(socialNetworkRepository);
  const socialNetworksHandleState = new SocialNetworksHandleState(getSocialNetworksUseCase);

  return socialNetworksHandleState;
}

