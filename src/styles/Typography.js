import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  body {
    color: var(--black);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
    letter-spacing: 0.1rem;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Zen Kurenaido', sans-serif;
    font-weight: normal;
    margin: 0;
  }

  a {
    color: var(--black);
    text-decoration-color: var(--red);
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
