import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #231f20;
    --grey: #eaeaea;
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
  
  main {
    max-width: 2000px;
    margin: 0 auto;
    padding: 0 4vw;
    overflow-x: hidden;
  }

  article {
    padding: 3rem 0;
  }
`;

export default GlobalStyles;
