import styled from 'styled-components';

import { fadeLeft, fadeRight, flipDown, jump, jumpIn } from './keyframes';


export const AnimateOnce = styled.div`
  animation-iteration-count: 1;
`;

export const AnimateEaseLinear = styled.div`
  animation-timing-function: linear;
`;

export const AnimateFadeLeft = styled.div`
  animation: ${fadeLeft} 1s both;
`;

export const AnimateFadeRight = styled.div`
  animation: ${fadeRight} 1s both;
`;

export const AnimateFlipDown = styled.div`
  animation: ${flipDown} 1.2s both;
`;

export const AnimateJump = styled.div`
  animation: ${jump} .5s both;
`;
export const AnimateJumpIn = styled.div`
  animation: ${jumpIn} .5s both;
`;
