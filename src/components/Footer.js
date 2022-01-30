import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
  color: var(--dark-grey);
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Marcin Sędłak-Jakubowski {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
