import { SocialNetworks } from './socialNetwork';

export interface SocialNetworksRepository {
  all(): Promise<SocialNetworks>;
}
