import { DataService } from '../../dataService';
import { SocialNetworks } from '../../entities/socialNetwork';
import { SocialNetworksError } from '../errors';
import { SocialNetworksRepository } from '../socialNetworkRepository';

export class GetSocialNetworks {
  private socialNetworks: SocialNetworksRepository;

  constructor(dataService: DataService) {
    this.socialNetworks = dataService.socialNetworks;
  }

  async execute(): Promise<SocialNetworks> {
    try {
      return await this.socialNetworks.all();
    } catch (error) {
      if (error instanceof Error) {
        throw new SocialNetworksError(error.message, error);
      }

      throw new SocialNetworksError('Unexpected error');
    }
  }
}
