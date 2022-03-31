import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #231f20;
    --grey: #eaeaea;
    --dark-grey: #7a7575;
    --white: #fff;
    --teal: #1aa687;
    --red: #ff414d;
    --baby-blue: #d9ecf2;
    --blue: #0390bd;
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
    padding: 4vw 2vw;
  }

  article {
    padding: 3rem 0;
  }

  .m-top-3 {
    margin-top: 3rem;;
  }

  .m-top-4 {
    margin-top: 4rem;;
  }
`;

export default GlobalStyles;
