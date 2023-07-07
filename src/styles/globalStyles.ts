import { createGlobalStyle } from 'styled-components';
import { AppTheme } from './themes';

export const GlobalStyles = createGlobalStyle<{ theme: AppTheme }>`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.body.background};
    position: ${props => props.theme.body.position};
    overflow: ${props => props.theme.body.overflow};
    width: ${props => props.theme.body.width};
    height: ${props => props.theme.body.height};
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${props => props.theme.colors.text};
  }

  body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform: scale(10);
    animation: twinkling 2s both;
    background: radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 2px);
    background-size: 100px 100px;
    box-shadow: calc(0px * 1px) calc(100px * 1px) 0 rgba(255, 255, 255, 0.7),
      calc(100px * 1px) calc(10px * 1px) 0 rgba(255, 255, 255, 0.7);
  }

  @keyframes twinkling {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }

  body::before {
    top: calc(var(--top) * 1px);
    left: calc(var(--left) * 1px);
  }
`;
