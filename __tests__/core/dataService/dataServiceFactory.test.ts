import { DataServiceFactory, UnsupportedDriverDataError } from '../../../src/core/dataService';
import { DataServiceInMemory } from '../../../src/core/dataService/memory/dataServiceInMemory';

describe('Core', () => {
  describe('Data Service', () => {
    describe('Data Service Factory', () => {
      it('should return data service when using the memory driver', () => {
        const driver = 'memory';
        const dataService = DataServiceFactory(driver);

        expect(dataService).toBeInstanceOf(DataServiceInMemory);
      });

      it('should throw an error when using an unsupported driver', () => {
        const driver = 'mysql';

        expect(() => {
          DataServiceFactory(driver);
        }).toThrowError(UnsupportedDriverDataError);
      });
    });
  });
});
