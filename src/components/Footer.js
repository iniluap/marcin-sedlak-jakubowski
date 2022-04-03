import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  grid-area: footer;
  text-align: center;
  color: var(--dark-grey);
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Marcin Sędłak-Jakubowski {new Date().getFullYear()}</p>
      <p>
        Design and development by{' '}
        <a
          href="https://paulina.s-j.me"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to the website of Paulina Sędłak-Jakubowska"
        >
          Paulina Sędłak-Jakubowska
        </a>
      </p>
    </FooterStyles>
  );
}
