import React, { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

interface ThemeProps {
  children: ReactNode;
  theme: DefaultTheme; // Replace 'object' with the type of your theme object
}

const Theme: React.FC<ThemeProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
