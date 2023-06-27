export class SocialNetworksError extends Error {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, SocialNetworksError.prototype);
    this.name = 'SocialNetworksError';
  }
}
