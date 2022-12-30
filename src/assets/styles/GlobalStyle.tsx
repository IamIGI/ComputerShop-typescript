import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

//---------set box sizing: border=box, so that style css will be more predictable
//---------add this always
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
//----------------------------------------------------------------------------
  

body {
    background-color: white;
    font-family: 'Lato', 'Montserrat',sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: 'Lato','Montserrat', sans-serif;
  } 

`;
