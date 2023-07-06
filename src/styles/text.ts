import styled from 'styled-components';

import { AppTheme } from './themes';

export const TextCenter = styled.div<{ theme: AppTheme }>`
  text-align: center;
  height: 100%;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: 0px 30px 0px 30px;
  text-indent: 15px;
  white-space: pre-line;
`;
