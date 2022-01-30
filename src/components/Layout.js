import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
