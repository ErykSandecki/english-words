import { createGlobalStyle } from 'styled-components';

// others
import { EFontNames } from './constants';

export default createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%; 
  }

  body {
  background-color: #F9F9F9;
    font-family: ${EFontNames.RUBIK}, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    min-height: 100vh;
  }

  input, 
  header,
  textarea, 
  a, 
  p, 
  span, 
  kbd {
    font-family: ${EFontNames.RUBIK}, sans-serif;
  }

  p {
    margin: 0;
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    font-family: ${EFontNames.NUNITO}, sans-serif;
  }
`;
