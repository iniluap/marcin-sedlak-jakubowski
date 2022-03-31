import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  h1 {
    font-size: 7vw;
    margin: 0.5rem 0;
    position: relative;
    z-index: 1;
  }

  hr {
    height: 2rem;
    width: 100%;
    background: var(--teal);
    border: none;
    box-shadow: 7px 10px 0px -3px var(--grey);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <h1>
        Marcin
        <br />
        Sedlak-Jakubowski
      </h1>
      <hr />
      <h2>word geek, technologist, and believer in humans</h2>
    </HeaderStyles>
  );
}
