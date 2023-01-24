import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    MediumPurple: '#9381FF',
    RussianViolet: '#231942',
    GhostWhite: '#FBFBFF',
  },
  fonts: ['Chillax', 'sans-serif'],
  fontSize: {
    small: '15px',
    medium: '20px',
    semiMedium: '30px',
    large: '48px'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;