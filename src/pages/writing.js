import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const WritingStyles = styled.div`
  .card-wrapper {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    @media screen and (min-width: 768px) {
      section:first-child {
        grid-column: 1 / span 2;
      }
    }
  }
`;

export default function WritingPage() {
  return (
    <WritingStyles>
      <SectionHeader
        sectionTitle="Writing samples"
        sectionLead="These are examples of how I use words as a Technical Writer. Use these
      when trying to recruit me. The PDFs show the content as it was at the
      time of writing."
      />

      <div className="card-wrapper">
        <Card
          title="MicroStrategy Cloud Platform documentation"
          subtitle="End-user docs: infrastructure"
          date="2019"
          content={
            <>
              This page describes the features and infrastructure of each cloud
              offering within the{' '}
              <a
                href="https://www.microstrategy.com/"
                target="_blank"
                rel="noreferrer"
              >
                MicroStrategy
              </a>{' '}
              Cloud Platform. The descriptions are visibly divided in style and
              specificity – starting with more high-level business blurbs
              followed by technical details and infrastructure diagrams
              (prepared by a graphic designer) hidden behind expandable
              sections.
            </>
          }
          link1Url="https://marcin.s-j.me/media/2019-MicroStrategy-Cloud-Platform-(How-to-Select-the-Right-Environment).pdf"
          link1="PDF (sample)"
          link2Url="https://www2.microstrategy.com/producthelp/Current/Cloud/en-us/Content/select_environ_type.htm"
          link2="Live version"
        ></Card>

        <Card
          title="MicroStrategy Cloud Platform documentation"
          subtitle="End-user docs: procedure"
          date="2019"
          content="This page provides two simple procedures for starting and stopping a
            cloud environment."
          link1Url="https://marcin.s-j.me/media/2019-MicroStrategy-Cloud-Platform-(How-to-Start-or-Stop-an-Environment).pdf"
          link1="PDF"
          link2Url="https://www2.microstrategy.com/producthelp/Current/Cloud/en-us/Content/start_stop_environ.htm"
          link2="Live version"
        ></Card>

        <Card
          title="Straal documentation"
          subtitle="End-user docs"
          date="2017"
          content={
            <>
              While working at{' '}
              <a href="https://straal.com/pl/" target="_blank" rel="noreferrer">
                Straal
              </a>
              , I created their end-user documentation from scratch. It contains
              a mix of explanations of how the card payment ecosystem works, and
              how to use Straal services. It combines high‑level business
              narrative, while remaining down‑to‑earth, like end‑user
              documentation should.
            </>
          }
          link1Url="https://marcin.s-j.me/media/2017-Straal-Documentation-(Payment-Methods).pdf"
          link1="PDF (sample)"
          link2Url="https://docs.straal.com/"
          link2="Live version"
        ></Card>

        <Card
          title="Straal documentation"
          subtitle="API reference"
          date="2017"
          content={
            <>
              While working at{' '}
              <a href="https://straal.com/pl/" target="_blank" rel="noreferrer">
                Straal
              </a>
              , I also updated and streamlined their existing API Reference.
              This document is highly technical and centered around the API
              endpoints and request workloads served by this API.
            </>
          }
          link1Url="https://marcin.s-j.me/media/2017-Straal-API-Reference-sample.pdf"
          link1="PDF (sample)"
          link2Url="https://api-reference.straal.com/"
          link2="Live version"
        ></Card>

        <Card
          title="Benerator Cumberpy"
          subtitle="readme"
          date="2017"
          content="This is a README of my silly Python package. I wrote it in
            reStructuredText, because it works better than Markdown when uploading
            packages to the Python Package Index."
          link1Url="https://marcin.s-j.me/media/2017-benerator-cumberpy-README.pdf"
          link1="PDF"
          link2Url="https://github.com/fdmarcin/benerator-cumberpy/blob/master/README.rst"
          link2="Live version"
        ></Card>
      </div>
    </WritingStyles>
  );
}
