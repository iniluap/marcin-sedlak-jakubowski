import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  h1 {
    font-size: 10rem;
    margin: 0.5rem 0;
    position: relative;
    z-index: 1;

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 2rem;
      width: 110%;
      top: auto;
      left: -1.5rem;
      bottom: 2rem;
      background: var(--teal);
      z-index: -1;
      opacity: 0.8;
    }
  }

  h2 {
    color: var(--navy);
    font-weight: bold;
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
      <h2>word geek, technologist, and believer in humans</h2>
    </HeaderStyles>
  );
}
