import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyles = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 3rem;
    margin: 0 0 2rem;
  }
`;

export default function SectionHeader({ sectionTitle, sectionLead }) {
  return (
    <SectionHeaderStyles>
      <h2>{sectionTitle}</h2>
      {sectionLead && <p>{sectionLead}</p>}
    </SectionHeaderStyles>
  );
}
