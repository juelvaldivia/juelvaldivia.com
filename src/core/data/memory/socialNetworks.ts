import { SocialNetworks, SocialNetworksRepository } from '../../socialNetwork';
import { DataError } from '../errors';

const socialNetworks = [{
  name: 'linkedin',
  url: 'https://linkedin.com/in/juelvaldivia'
}, {
  name: 'github',
  url: 'https://github.com/juelvaldivia'
}, {
  name: 'twitter',
  url: 'https://twitter.com/juelvaldivia'
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
        throw new DataError(error.message);
      }

      throw new DataError('Unexpected error');
    }
  }

  private getItems(): SocialNetworks {
    return this.items;
  }
}
