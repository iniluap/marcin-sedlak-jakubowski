import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #231f20;
    --grey: #eaeaea;
    --dark-grey: #7a7575;
    --white: #fff;
    --teal: #1aa687;
    --red: #ff414d;
    --blue: #d9ecf2;
    --navy: #002d40;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
  }
  
  main {
    height: 100vh;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4vw 4vw 2vw;
    overflow-x: hidden;
  }

  article {
    padding: 3rem 0;
  }
`;

export default GlobalStyles;
