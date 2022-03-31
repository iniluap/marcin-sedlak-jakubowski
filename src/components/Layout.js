import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import MobileNav from './MobileNav';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const MainStyles = styled.main`
  background: var(--white);
  display: grid;
  grid-template-rows: auto min-content 1fr min-content;
  grid-template-areas:
    'header'
    'nav'
    'content'
    'footer';
  gap: 2rem;
  align-items: start;
`;

const ArticleStyles = styled.article`
  grid-area: content;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <MobileNav />
      <MainStyles>
        <Header />
        <Nav className="nav" />
        <ArticleStyles>{children}</ArticleStyles>
        <Footer />
      </MainStyles>
    </>
  );
}
