import { SocialNetworks } from "../../core/socialNetwork";

export interface LoadingProductsState {
    kind: "LoadingSocialNetworksState";
}

export interface LoadedProductsState {
    kind: "LoadedSocialNetworksState";
    socialNetworks: SocialNetworks;
}

export interface ErrorProductsState {
    kind: "ErrorSocialNetworksState";
    error: string;
}

export type SocialNetworksState = LoadingProductsState | LoadedProductsState | ErrorProductsState;

export const socialNetworksInitialState: SocialNetworksState = {
    kind: "LoadingSocialNetworksState"
};
