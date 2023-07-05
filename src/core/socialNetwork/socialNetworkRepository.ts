import { SocialNetworks } from '../entities/socialNetwork';

export interface SocialNetworksRepository {
  all(): Promise<SocialNetworks>;
}
