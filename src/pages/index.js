import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faTwitter,
  faGitlab,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const SocialLinksStyles = styled.a`
  font-size: 2rem;

  &:hover {
    .fa-linkedin-in {
      color: #0072b1;
    }

    .fa-twitter {
      color: #00acee;
    }

    .fa-gitlab {
      color: #fc6d26;
    }

    .fa-github {
      color: #171515;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;

export default function IndexPage() {
  return (
    <>
      <p>
        Hi! My name is Marcin. I live in Warsaw, Poland, and this page is a
        cross between a business card and a portfolio.
      </p>
      <p>
        I got my education in teaching English as a foreign language, and worked
        as an English teacher for five years. Since 2017 I've worked as a
        Technical Writer (currently at{' '}
        <a href="https://about.gitlab.com/" target="_blank" rel="noreferrer">
          documentation for software
        </a>
        ).
      </p>
      <p>
        In the meantime, I've volunteered at a non-profit, where I organized
        youth camps and weekend workshops, leading educational exercises on
        human rights, diversity, sustainable development, and peaceful conflict
        resolution. I've also co‑organized{' '}
        <a href="https://www.pylight.org/" target="_blank" rel="noreferrer">
          PyLight Waw
        </a>
        , a beginner‑friendly Python meetup and have given talks on software
        documentation.
      </p>
      <p>
        No matter my future job title, I'm a{' '}
        <a
          href="https://www.writethedocs.org/documentarians/"
          target="_blank"
          rel="noreferrer"
        >
          documentarian
        </a>
        , a person who cares about documentation and communication in the
        software industry. I'd like to learn more about software UX and
        designing experiences in general.
      </p>
      <p>
        I care about open-source software, the welfare of humans and other
        animals, and, broadly speaking, building bridges not walls.
      </p>
      <ul className="m-top-3 ul-plain ul-links">
        <li>
          <SocialLinksStyles
            href="https://www.linkedin.com/in/marcin-sedlak-jakubowski-91143a124"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              title="LinkedIn accout of Marcin Sędłak-Jakubowski"
            />
          </SocialLinksStyles>
        </li>
        <li>
          <SocialLinksStyles
            href="https://twitter.com/manualcookie"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              title="Twitter accout of Marcin Sędłak-Jakubowski"
            />
          </SocialLinksStyles>
        </li>
        <li>
          <SocialLinksStyles
            href="https://gitlab.com/msedlakjakubowski"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGitlab}
              title="GitLab accout of Marcin Sędłak-Jakubowski"
            />
          </SocialLinksStyles>
        </li>
        <li>
          <SocialLinksStyles
            href="https://github.com/fdmarcin"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              title="GitHub accout of Marcin Sędłak-Jakubowski"
            />
          </SocialLinksStyles>
        </li>
      </ul>
    </>
  );
}
