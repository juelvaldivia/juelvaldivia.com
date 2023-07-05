import { DataServiceFactory, DriverDataService } from './dataService';
import { GetSocialNetworks, GetSocialNetworksHandlerState } from './socialNetwork';

export class CoreApp {
  private dataService;

  constructor(driverDataService: DriverDataService) {
    this.dataService = DataServiceFactory(driverDataService);
  }

  socialNetworksState(): GetSocialNetworksHandlerState {
    const getSocialNetworksUseCase = new GetSocialNetworks(this.dataService);

    return new GetSocialNetworksHandlerState(getSocialNetworksUseCase);
  }
}
