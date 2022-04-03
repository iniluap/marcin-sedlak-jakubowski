import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul className="ul-plain">
        <li>
          <Link to="/" className="nav-link" aria-label="Go to Home page">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="nav-link"
            aria-label="Go to Things I'm good at page"
          >
            Things I'm good at
          </Link>
        </li>
        <li>
          <Link to="/talks" className="nav-link" aria-label="Go to Talks page">
            Talks
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            className="nav-link"
            aria-label="Go to Articles page"
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            to="/writing"
            className="nav-link"
            aria-label="Go to Writing samples page"
          >
            Writing samples
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="nav-link"
            aria-label="Go to Projects page"
          >
            Projects
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
