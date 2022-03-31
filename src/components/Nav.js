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
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/skills" className="nav-link">
            Things I'm good at
          </Link>
        </li>
        <li>
          <Link to="/talks" className="nav-link">
            Talks
          </Link>
        </li>
        <li>
          <Link to="/articles" className="nav-link">
            Articles
          </Link>
        </li>
        <li>
          <Link to="/writing" className="nav-link">
            Writing samples
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
