import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const MainStyles = styled.main`
  background: var(--white);
  display: grid;
  grid-template-rows: auto 5rem 1fr min-content;
  gap: 2rem;
  align-items: start;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <MainStyles>
        <Header />
        <Nav class="nav" />
        <article>{children}</article>
        <Footer />
      </MainStyles>
    </>
  );
}
