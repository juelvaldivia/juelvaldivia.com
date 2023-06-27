export class SocialNetworksError extends Error {
  constructor(message?: string, error?: Error) {
    super(message, error);

    Object.setPrototypeOf(this, SocialNetworksError.prototype);
    this.name = 'SocialNetworksError';
  }
}
