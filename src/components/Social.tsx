import React, { useEffect } from 'react';

import { AnimateFadeRight, Container, Link, List, ListItem } from '../styles';
import { Github, LinkedIn, Twitter } from './Icons';

import { SocialNetwork } from '../core/socialNetwork';
import { useHandlerState } from '../common/useHandlerState';
import { containers } from '../containers';

const getIconByName = (name: string) => {
  if (name === 'twitter') {
    return Twitter;
  }
  if (name === 'linkedin') {
    return LinkedIn;
  }
  if (name === 'github') {
    return Github;
  }

  return <div></div>;
};

const Social: React.FC = () => {
  const socialNetworksHandlerState = containers.buildSocialNetworkHandleState();
  const state = useHandlerState(socialNetworksHandlerState);

  useEffect(() => {
    const searchAllSocialNetworks = async () => {
      socialNetworksHandlerState.searchAll();
    };

    searchAllSocialNetworks();
  }, [socialNetworksHandlerState]);

  switch (state.kind) {
    case 'LoadingSocialNetworksState': {
      return <Container>Loading..</Container>;
    }
    case 'ErrorSocialNetworksState': {
      return <Container>Unexpected error</Container>;
    }
    case 'LoadedSocialNetworksState': {
      return (
        <AnimateFadeRight>
          <List>
            {state.socialNetworks.map((item: SocialNetwork, index: number) => (
              <ListItem key={`social-${index}`}>
                <Link href={item.url} target="_blank">
                  {getIconByName(item.name)}
                </Link>
              </ListItem>
            ))}
          </List>
        </AnimateFadeRight>
      );
    }
  }
};

export default Social;
