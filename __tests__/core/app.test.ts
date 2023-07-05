import { CoreApp } from '../../src/core/app';
import { DriverDataService } from '../../src/core/dataService';
import { GetSocialNetworksHandlerState } from '../../src/core/socialNetwork';

describe('Core App', () => {
  describe('socialNetworksState', () => {
    let driverDataService: DriverDataService;
    let coreApp: CoreApp;

    beforeEach(() => {
      driverDataService = 'memory';

      coreApp = new CoreApp(driverDataService);
    });

    it('should return an instance of GetSocialNetworksHandlerState', () => {
      const socialNetworksState = coreApp.socialNetworksState();

      expect(socialNetworksState).toBeInstanceOf(GetSocialNetworksHandlerState);
    });
  });
});
