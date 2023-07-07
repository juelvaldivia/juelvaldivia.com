import React, { useEffect } from 'react';

import { AnimateFadeRight, Container, Link, List, ListItem } from '../styles';
import { Github, Instagram, LinkedIn, Mastodon, Medium, Twitter, Youtube } from './Icons';

import { useHandlerState } from '../common/useHandlerState';
import { SocialNetwork } from '../core/entities';
import { useCoreApp } from '../App';

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
  if (name === 'mastodon') {
    return Mastodon;
  }
  if (name === 'medium') {
    return Medium;
  }
  if (name === 'youtube') {
    return Youtube;
  }
  if (name === 'instagram') {
    return Instagram;
  }

  return null;
};

const getName = (name: string) => {
  return <span style={{ fontSize: '0.8em', fontWeight: 400 }}>{name}</span>;
};

const Social: React.FC = () => {
  const coreApp = useCoreApp();
  const socialNetworksState = coreApp.socialNetworksState();
  const state = useHandlerState(socialNetworksState);

  useEffect(() => {
    const searchAllSocialNetworks = async () => {
      socialNetworksState.searchAll();
    };

    searchAllSocialNetworks();
  }, [socialNetworksState]);

  switch (state.kind) {
    case 'LoadingSocialNetworksState': {
      return <Container>Loading..</Container>;
    }
    case 'ErrorGetSocialNetworksState': {
      return <Container>Unexpected error</Container>;
    }
    case 'LoadedSocialNetworksState': {
      return (
        <AnimateFadeRight>
          <List>
            {state.socialNetworks.map((item: SocialNetwork, index: number) => (
              <ListItem key={`social-${index}`}>
                <Link rel="me" href={item.url} target="_blank">
                  {getIconByName(item.name) || getName(item.name)}
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
