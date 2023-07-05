import { SocialNetworksRepository } from '../socialNetwork';

export interface DataService {
  socialNetworks: SocialNetworksRepository;
}

export type DriverDataService = 'memory';
