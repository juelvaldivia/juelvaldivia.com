import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { SocialNetwork } from '../core/socialNetwork';
import { useHandlerState } from '../common/useHandlerState';
import { containers } from '../containers';

const SocialStyle = styled.div`
  margin: 0 auto;
  display: block;
`;

const SocialUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
`;

const getIconByName = (name: string) => {
  if (name === 'twitter') {
    return <FaTwitter />;
  }
  if (name === 'linkedin') {
    return <FaLinkedinIn />;
  }
  if (name === 'github') {
    return <FaGithub />;
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
      return <SocialStyle>Loading..</SocialStyle>;
    }
    case 'ErrorSocialNetworksState': {
      return <SocialStyle>Unexpected error</SocialStyle>;
    }
    case 'LoadedSocialNetworksState': {
      return (
        <SocialStyle>
          <SocialUl>
            {state.socialNetworks.map((item: SocialNetwork, index: number) => (
              <SocialLi key={`social-${index}`}>
                <SocialAnchor href={item.url} target="_blank">
                  {getIconByName(item.name)}
                </SocialAnchor>
              </SocialLi>
            ))}
          </SocialUl>
        </SocialStyle>
      );
    }
  }
};

export default Social;
