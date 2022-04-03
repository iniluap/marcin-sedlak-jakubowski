import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const TalksStyles = styled.div`
  .card-wrapper {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export default function TalksPage() {
  return (
    <TalksStyles>
      <SectionHeader sectionTitle="Talks" />
      <div className="card-wrapper">
        <Card
          title="Tech Writer pracuje zdalnie, czyli jak to się robi w GitLabie | PL"
          titleLang="pl"
          subtitle="Tech Writer koduje podcast"
          date="July 2020"
          content={
            <>
              I've spoken to the guys of the <i>Tech Writer koduje</i> podcast
              about how we work at GitLab and shared tips on making remote work
              work for you.
            </>
          }
          link1Url="https://techwriterkoduje.pl/blog/2020/07/08/tech-writer-pracuje-zdalnie"
          link1AltText="Redirect in new tab to this podcast"
          link1="Listen"
        ></Card>

        <Card
          title="Jak czytać i pisać dokumentację oprogramowania | PL"
          titleLang="pl"
          subtitle="PyLight warsaw #18"
          date="January 2020"
          content="An introduction to the world of software documentation - tools,
              approaches, and best practices for clear writing. This was so much
              fun!"
          link1Url="https://youtu.be/vkZpGTvVXAU"
          link1AltText="Redirect in new tab to this video"
          link1="YouTube"
          link2Url="https://slides.com/marcinse/docs-pl"
          link2AltText="Redirect in new tab to this presentation file"
          link2="Slides"
        ></Card>

        <Card
          title="Git – wprowadzenie | PL"
          titleLang="pl"
          subtitle="PyLight Warsaw #11, with Kasia Siedlarek"
          date="February 2019"
          content="An introduction to Git for beginners to programming."
          link1Url="https://www.youtube.com/watch?v=gdUjhFfkofY"
          link1AltText="Redirect in new tab to this video"
          link1="YouTube"
          link2Url="https://github.com/PyLightMeetup/11-siedlarek-sedlakjakubowski-git-wprowadzenie/blob/master/KS%20i%20MSJ%20-%20Git%20101.pdf"
          link2AltText="Redirect in new tab to this presentation file"
          link2="Slides"
        ></Card>

        <Card
          title="Write the lyrics – fork of the repo | EN"
          titleLang="en"
          subtitle="Lightning talk(?) at write the docs prague 2018"
          date="September 2018"
          content="A Michael Jackson a'capella cover about contributing to open‑source. I
              don't know how it happened, but I had a lot of fun with these folks."
          link1Url="https://www.youtube.com/watch?v=YMEXRBqNTKY"
          link1AltText="Redirect in new tab to this video"
          link1="YouTube"
          link2Url="https://github.com/vstirbu/writethelirycs"
          link2AltText="Redirect in new tab to this song's lyrics"
          link2="Lyrics"
        ></Card>

        <Card
          title="How crosswords can bring departments together | EN"
          titleLang="en"
          subtitle="Lightning talk at Write the Docs Prague 2018"
          date="September 2018"
          content="A short tale on why solving crosswords together can be fun, especially if you're a word person."
          link1Url="https://youtu.be/YMEXRBqNTKY"
          link1AltText="Redirect in new tab to this video"
          link1="YouTube"
        ></Card>

        <Card
          title="Niech to dundry świsną! Programistyczne rozmówki angielsko-polskie | PL"
          titleLang="pl"
          subtitle="PyLight Warsaw #4"
          date="February 2017"
          content="A guide through the mistakes Polish‑speakers make when speaking about
            technology. Possibly entertaining not only to Polish‑speakers, because
            I make a lot of funny noises to illustrate my point."
          link1Url="https://www.youtube.com/watch?v=W-bm1bLupuc"
          link1AltText="Redirect in new tab to this video"
          link1="YouTube"
          link2Url="http://slides.com/marcinse/dundry"
          link2AltText="Redirect in new tab to this presentation file"
          link2="Slides"
        ></Card>
      </div>
    </TalksStyles>
  );
}
