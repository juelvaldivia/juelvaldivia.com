import { SocialNetworks } from '../../entities';

export interface LoadingSocialNetworksState {
    kind: 'LoadingSocialNetworksState';
}

export interface LoadedSocialNetworksState {
    kind: 'LoadedSocialNetworksState';
    socialNetworks: SocialNetworks;
}

export interface ErrorGetSocialNetworksState {
    kind: 'ErrorGetSocialNetworksState';
    error: string;
}

export type SocialNetworksState = (
    LoadingSocialNetworksState | LoadedSocialNetworksState | ErrorGetSocialNetworksState
);

export const socialNetworksInitialState: SocialNetworksState = {
    kind: 'LoadingSocialNetworksState'
};
