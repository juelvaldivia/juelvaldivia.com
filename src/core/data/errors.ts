export class DataError extends Error {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, DataError.prototype);
    this.name = 'DataError';
  }
}
