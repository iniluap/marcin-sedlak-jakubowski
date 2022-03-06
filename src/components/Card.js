import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.section`
  border-bottom: 2px solid var(--blue);
  box-shadow: 7px 10px 18px -3px var(--grey);
  padding: 1rem;

  h3 {
    margin-bottom: 1rem;
  }

  h4 {
    color: var(--navy);
    font-weight: 600;
  }

  .date {
    color: var(--dark-grey);
    font-size: 1rem;
  }
`;

export default function Card({
  title,
  subtitle,
  date,
  content,
  link1Url,
  link1,
  link2Url,
  link2,
}) {
  return (
    <CardStyles>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p class="date">{date}</p>
      <p>{content}</p>
      <div>
        <ul>
          <li>
            <a href={link1Url}>{link1}</a>
          </li>
          {link2 && (
            <li>
              <a href={link2Url}>{link2}</a>
            </li>
          )}
        </ul>
      </div>
    </CardStyles>
  );
}
