import { DataService } from '../dataService';
import { SocialNetworksRepository } from '../../socialNetwork';
import { SocialNetworksInMemory } from './socialNetworks';

export class DataServiceInMemory implements DataService {
  public socialNetworks: SocialNetworksRepository;

  constructor() {
    this.socialNetworks = new SocialNetworksInMemory(null);
  }
}
