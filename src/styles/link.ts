import styled from 'styled-components';

import { AppTheme } from './themes';

export const Link = styled.a<{ theme: AppTheme }>`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.2em;
  transition: opacity 0.5s ease;
`;
