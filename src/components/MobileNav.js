import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNavStyles = styled.nav`
  position: fixed;
  top: 0;
  right: -100%;
  background-color: var(--white);
  width: 90vw;
  max-width: 400px;
  height: 100%;
  z-index: 10;
  padding: 4rem;
  box-shadow: 0px 2px 12px 0px rgb(46 41 51 / 8%);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.is-open {
    right: 0;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavTriggerStyle = styled.button`
  width: auto;
  height: auto;
  padding: 2rem;
  border: none;
  position: absolute;
  background: none;
  cursor: pointer;

  &.close-trigger {
    right: auto;
    top: 2rem;
    right: 3rem;
  }

  &.open-trigger {
    position: fixed;
    right: 0;
    top: 2rem;
    background-color: var(--white);
    box-shadow: 0px 2px 12px 0px rgb(46 41 51 / 8%);
    z-index: 100;
  }

  .is-open &.open-trigger {
    display: none;
  }
`;

const MobileNavLiStyled = styled.li`
  margin-bottom: 1rem;
`;

export default function MobileNav() {
  let isOpen;

  return (
    <MobileNavStyles className={isOpen ? 'is-open' : ''}>
      <MobileNavTriggerStyle
        className="open-trigger"
        onClick={() => (isOpen = true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </MobileNavTriggerStyle>
      <MobileNavTriggerStyle
        className="close-trigger"
        onClick={() => (isOpen = false)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </MobileNavTriggerStyle>
      <ul className="ul-plain">
        <MobileNavLiStyled>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </MobileNavLiStyled>
        <MobileNavLiStyled>
          <Link to="/skills" className="nav-link">
            Things I'm good at
          </Link>
        </MobileNavLiStyled>
        <MobileNavLiStyled>
          <Link to="/talks" className="nav-link">
            Talks
          </Link>
        </MobileNavLiStyled>
        <MobileNavLiStyled>
          <Link to="/articles" className="nav-link">
            Articles
          </Link>
        </MobileNavLiStyled>
        <MobileNavLiStyled>
          <Link to="/writing" className="nav-link">
            Writing samples
          </Link>
        </MobileNavLiStyled>
        <MobileNavLiStyled>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </MobileNavLiStyled>
      </ul>
    </MobileNavStyles>
  );
}
