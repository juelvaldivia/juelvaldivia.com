import { UnsupportedDriverDataError } from './errors';
import { DataServiceInMemory } from './memory/dataServiceInMemory';

export const DataServiceFactory = (driver = 'memory') => {
  if (driver === 'memory') {
    return new DataServiceInMemory();
  } else {
    throw new UnsupportedDriverDataError(driver);
  }
};

export * from './dataService';
export * from './errors';
