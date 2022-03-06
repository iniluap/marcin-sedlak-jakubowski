import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const ArticlesStyles = styled.div`
  section {
    margin-bottom: 4rem;
  }
`;

export default function ArticlesPage() {
  return (
    <ArticlesStyles>
      <SectionHeader sectionTitle="Articles" />
      <Card
        title="Autor instrukcji obsługi. nauczyciel albo tłumacz łatwo może się
          przekwalifikować | PL"
        subtitle="money.pl"
        date="March 2019"
        content="Article in which I'm quoted describing what the job of a technical
          writer is about."
        link1Url="https://msp.money.pl/wiadomosci/autor-instrukcji-obslugi-nauczyciel-albo-tlumacz-latwo-moze-sie-przekwalifikowac-6356874938795649a.html?fbclid=IwAR3Twm9cFJFQQ1gPz8ifR6b_29SqhsjVq2DWtcUjcLPPfYl2W76Zm4dFErM"
        link1="Article"
      ></Card>

      <Card
        title="Ucząc przez uczenie, czyli czego nauczyłem się jako nauczyciel | PL"
        subtitle="My personal blog from the past"
        date="2014"
        content="Article I wrote when I was actively teaching, running a blog for a
          short time, and before I started learning programming. It sums up some
          things I learned along the way. I might translate it to English one
          day. There are a few more articles on the blog, but I like this one
          the most."
        link1Url="https://6razy7.wordpress.com/2014/11/13/uczac-przez-uczenie/"
        link1="Article"
      ></Card>
    </ArticlesStyles>
  );
}
