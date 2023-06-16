import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { GetSocialNetworks, SocialNetworks, SocialNetwork } from '../core/socialNetwork';
import { SocialNetworksInMemory } from '../core/data/memory';
import { DataError } from '../core/common';

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
  if (name === 'twitter') return <FaTwitter />;
  if (name === 'linkedin') return <FaLinkedinIn />;
  if (name === 'github') return <FaGithub />;

  return <div></div>;
};

const handleError = (error: DataError) => {
  switch (error.kind) {
    case 'UnexpectedError': {
      return {
        kind: 'ErrorSocialNetworksState',
        error: error.error.message
      };
    }
  }
};

const Social: React.FC = () => {
  // TODO: implement better a state handler
  const emptySocialNetwork: SocialNetworks = [];
  const [socialNetworks, setSocialNetworks] = useState(emptySocialNetwork);
  const [error, setError] = useState({ kind: 'WithoutError', error: '' });

  useEffect(() => {
    const getSocialNetworks = async () => {
      const repository = new SocialNetworksInMemory([]);
      const useCase = new GetSocialNetworks(repository);
      const result = await useCase.execute();

      result.evaluate(
        (socialNetworks) => setSocialNetworks(socialNetworks),
        (error) => setError(handleError(error))
      );
    };

    getSocialNetworks();
  }, [socialNetworks]);

  if (error.kind === 'ErrorSocialNetworksState') {
    return <SocialStyle>{error.error}</SocialStyle>;
  }

  if (error.kind === 'WithoutError') {
    return (
      <SocialStyle>
        {socialNetworks && (
          <SocialUl>
            {socialNetworks.map((item: SocialNetwork, index: number) => (
              <SocialLi key={`social-${index}`}>
                <SocialAnchor href={item.url} target="_blank">
                  {getIconByName(item.name)}
                </SocialAnchor>
              </SocialLi>
            ))}
          </SocialUl>
        )}
      </SocialStyle>
    );
  } else {
    return <div></div>;
  }
};

export default Social;
