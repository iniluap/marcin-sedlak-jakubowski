import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin: 3rem 0;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    list-style: none;
  }

  a {
    display: inline-block;
    transition: all 0.2s ease-out;
    font-size: 1.5rem;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline var(--teal);
      text-decoration-thickness: 0.2rem;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Things I'm good at</Link>
        </li>
        <li>
          <Link to="/talks">Talks</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/writing">Writing samples</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
