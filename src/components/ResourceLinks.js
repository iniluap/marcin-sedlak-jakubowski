import React from 'react';
import styled from 'styled-components';

const ResourceLinksStyles = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-left: 0;
`;

export default function ResourceLinks({ link1Url, link1, link2Url, link2 }) {
  return (
    <ResourceLinksStyles>
      <li>
        <a href={link1Url}>{link1}</a>
      </li>
      {link2 && (
        <li>
          <a href={link2Url}>{link2}</a>
        </li>
      )}
    </ResourceLinksStyles>
  );
}
