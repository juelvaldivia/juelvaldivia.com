import { keyframes } from 'styled-components';

export const fadeLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate(2rem)
  }

  to {
    opacity: 1;
    transform: translate(0)
  }
`;

export const fadeRight = keyframes`
  0% {
    opacity: 0;
    transform: translate(-2rem)
  }

  to {
    opacity: 1;
    transform: translate(0)
  }
`;

export const flipDown = keyframes`
  0% {
    transform: rotateX(-90deg);
    transform-origin: top
  }

  to {
    transform: rotateX(0);
    transform-origin: top
  }
`;

export const jump = keyframes`
  0%,to {
    transform: scale(1)
  }

  10% {
    transform: scale(.8)
  }

  50% {
    transform: scale(1.2)
  }
`;

export const jumpIn = keyframes`
  0% {
    transform: scale(0%)
  }

  80% {
    transform: scale(1.2)
  }

  to {
    transform: scale(1)
  }
`;

export const twinkling = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
`;
