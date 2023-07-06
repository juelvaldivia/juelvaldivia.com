import { SocialNetworks } from '../../entities/socialNetwork';
import { SocialNetworksRepository } from '../../socialNetwork';
import { DataServiceError } from '../errors';

const socialNetworks = [{
  name: 'linkedin',
  url: 'https://linkedin.com/in/juelvaldivia'
}, {
  name: 'github',
  url: 'https://github.com/juelvaldivia'
}, {
  name: 'twitter',
  url: 'https://twitter.com/juelvaldivia'
}, {
  name: 'mastodon',
  url: 'https://mastodon.social/@juelvaldivia'
}, {
  name: 'medium',
  url: 'https://medium.com/@juelvaldivia'
}, {
  name: 'youtube',
  url: 'https://www.youtube.com/@juelvaldivia'
}, {
  name: 'instagram',
  url: 'https://www.instagram.com/juelvaldivia'
}];

export class SocialNetworksInMemory implements SocialNetworksRepository {
  private items: SocialNetworks = [];

  constructor(items: SocialNetworks | null) {
      this.items = items || socialNetworks;
  }

  async all(): Promise<SocialNetworks> {
    try {
      return this.getItems();
    } catch (error) {
      if (error instanceof Error) {
        throw new DataServiceError(error.message);
      }

      throw new DataServiceError('Unexpected error');
    }
  }

  private getItems(): SocialNetworks {
    return this.items;
  }
}
