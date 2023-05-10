import { ThemeType } from './theme.types';
import { createGlobalStyle } from 'styled-components';

export const theme: ThemeType = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  colors: {
    primary: '#0077cc',
    secondary: '#adb5db',
    grey: '#d4d4d4',
    lightGrey: '#f0f0f0',
    darkGrey: '#343a40',
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Helvetica, sans-serif',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${theme.colors.darkGrey};
    background: ${theme.colors.lightGrey};
  }
`;
