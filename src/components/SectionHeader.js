import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyles = styled.div`
  h2 {
    font-size: 3rem;
    margin: 0.5rem 0 2rem;
  }
`;

export default function SectionHeader({ sectionTitle }) {
  return (
    <SectionHeaderStyles>
      <h2>{sectionTitle}</h2>
    </SectionHeaderStyles>
  );
}
