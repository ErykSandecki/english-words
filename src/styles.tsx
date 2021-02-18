import { createGlobalStyle } from 'styled-components';

// others
import { EFontNames } from './constants';

export default createGlobalStyle`
  * {
   margin:0;
   padding:0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%; 
  }

  body {
    font-family: ${EFontNames.RUBIK}, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
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

  .table {
    width: 100%;
        overflow: hidden;
        border-radius: 3px;
        -webkit-box-shadow: 0 1px 6px 0 rgba(0,0,0,.12), 0 1px 6px 0 rgba(0,0,0,.12);
           -moz-box-shadow: 0 1px 6px 0 rgba(0,0,0,.12), 0 1px 6px 0 rgba(0,0,0,.12);
                box-shadow: 0 1px 6px 0 rgba(0,0,0,.12), 0 1px 6px 0 rgba(0,0,0,.12);
    }

    .table > thead > tr > th {
        border-bottom-color: #EEEEEE;
    }

    .table > tbody > tr > td, 
    .table > tbody > tr > th,
    .table > thead > tr > td, 
    .table > thead > tr > th {
        padding: 15px;
        border-top-color: #EEEEEE;
    }

    .table > tbody > tr:hover > td {
        background-color: #FAFAFA;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr, th {
      text-align: center;
    }
`;
