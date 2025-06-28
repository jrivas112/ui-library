import { defaultTheme } from './defaultTheme.js';

export const projectATheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#FF0000',
    textOnPrimary: '#FFFFFF'
  },
  typography: {
    ...defaultTheme.typography,
    fontFamily: 'Arial, sans-serif'
  }
};
