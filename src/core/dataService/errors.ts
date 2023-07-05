export class DataServiceError extends Error {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, DataServiceError.prototype);
    this.name = 'DataServiceError';
  }
}

export class UnsupportedDriverDataError extends DataServiceError {
  constructor(driver: string) {
    super(`Unsupported driver: ${driver}`);

    Object.setPrototypeOf(this, UnsupportedDriverDataError.prototype);
    this.name = 'UnsupportedDriverDataError';
  }
}
