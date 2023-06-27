import { SocialNetworksError } from './errors';
import { SocialNetworks } from './socialNetwork';
import { SocialNetworksRepository } from './socialNetworkRepository';

export class GetSocialNetworks {
  private socialNetworksRepository: SocialNetworksRepository;

  constructor(repository: SocialNetworksRepository) {
    this.socialNetworksRepository = repository;
  }

  async execute(): Promise<SocialNetworks> {
    try {
      return await this.socialNetworksRepository.all();
    } catch (error: any) {
      throw new SocialNetworksError(error)
    }
  }
}
