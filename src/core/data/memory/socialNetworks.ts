import { SocialNetworks, SocialNetworksRepository } from '../../socialNetwork';

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

  constructor(items: SocialNetworks) {
      this.items = items.length > 0 ? items : socialNetworks;
  }

  async all() {
    try {
      return this.items;
    } catch (error) {
      throw error
    }
  }
}
