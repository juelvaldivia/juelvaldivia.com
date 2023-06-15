import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

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
const SocialIcon = styled.i`
  color: ${(props) => props.theme.color};
`;

const facebook = {
  color: '#5998df'
};

const twitter = {
  color: '#5998df'
};

const linkedin = {
  color: '#5998df'
};

const github = {
  color: '#fff'
};

const getColor = (name: String) => {
  if (name === 'facebook') return facebook;
  if (name === 'twitter') return twitter;
  if (name === 'linkedin') return linkedin;
  if (name === 'github') return github;

  return { color: '#fff' };
};

export interface SocialNetworks {
  items: Array<SocialNetwork>;
}

export type SocialNetwork = {
  name: string;
  url: string;
};

const Social = (socialNetworks: SocialNetworks) => (
  <SocialStyle>
    {socialNetworks && (
      <SocialUl>
        {socialNetworks.items.map((item, index) => (
          <SocialLi key={`social-${index}`}>
            <SocialAnchor href={item.url} target="blank">
              <ThemeProvider theme={getColor(item.name)}>
                {item.name}
                <SocialIcon className={`fa fa-${item.name}`} />
              </ThemeProvider>
            </SocialAnchor>
          </SocialLi>
        ))}
      </SocialUl>
    )}
  </SocialStyle>
);

export default Social;
