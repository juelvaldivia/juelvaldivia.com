import { DefaultTheme } from 'styled-components';

export interface AppTheme extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
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
  colors: {
    primary: '#1976d2',
    secondary: '#e53935',
    text: '#fff',
    background: '#131313',
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
  colors: {
    primary: '#2196f3',
    secondary: '#f44336',
    text: '#000',
    background: '#fff',
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
