import { DefaultTheme } from 'styled-components';

export interface AppTheme extends DefaultTheme {
  body: {
    position: string;
    overflow: string;
    width: string;
    height: string;
    background: string;
  },
  colors: {
    primary: string;
    secondary: string;
    text: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  fontWeights: {
    light: string;
    medium: string;
    bold: string;
  };
}

export const darkTheme: AppTheme = {
  body: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom right, #0B0C10, #1F2833)'
  },
  colors: {
    primary: '#1976d2',
    secondary: '#e53935',
    text: '#fff'
  },
  fontSizes: {
    small: '0.5em',
    medium: '0.7em',
    large: '0.9em',
  },
  fontWeights: {
    light: '300',
    medium: '400',
    bold: '500',
  },
};

export const lightTheme: AppTheme = {
  body: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    background: '#fff'
  },
  colors: {
    primary: '#2196f3',
    secondary: '#f44336',
    text: '#000'
  },
  fontSizes: {
    small: '0.5em',
    medium: '0.7em',
    large: '0.9em'
  },
  fontWeights: {
    light: '300',
    medium: '400',
    bold: '500'
  },
};
