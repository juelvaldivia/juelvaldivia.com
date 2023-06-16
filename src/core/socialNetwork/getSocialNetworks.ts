import { DataError, ResultEvaluator } from '../common';
import { SocialNetworks } from './socialNetwork';
import { SocialNetworksRepository } from './socialNetworkRepository';

export class GetSocialNetworks {
  private socialNetworksRepository: SocialNetworksRepository;

  constructor(repository: SocialNetworksRepository) {
    this.socialNetworksRepository = repository;
  }

  async execute(): Promise<ResultEvaluator<SocialNetworks, DataError>> {
    try {
      const socialNetworks = await this.socialNetworksRepository.all();

      return ResultEvaluator.ok(socialNetworks);
    } catch (error: any) {
      return ResultEvaluator.withError(error);
    }
  }
}
