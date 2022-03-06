import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function WritingPage() {
  return (
    <>
      <SectionHeader sectionTitle="Writing samples" />
      <h2>
        These are examples of how I use words as a Technical Writer. Use these
        when trying to recruit me. The PDFs show the content as it was at the
        time of writing.
      </h2>
      <section>
        <h3>MICROSTRATEGY CLOUD PLATFORM DOCUMENTATION</h3>
        <h4>END-USER DOCS: INFRASTRUCTURE</h4>
        <p>2019</p>
        <p>
          This page describes the features and infrastructure of each cloud
          offering within the{' '}
          <a href="https://www.microstrategy.com/">MicroStrategy</a> Cloud
          Platform. The descriptions are visibly divided in style and
          specificity – starting with more high-level business blurbs followed
          by technical details and infrastructure diagrams (prepared by a
          graphic designer) hidden behind expandable sections.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://marcin.s-j.me/media/2019-MicroStrategy-Cloud-Platform-(How-to-Select-the-Right-Environment).pdf">
                PDF (sample)
              </a>
            </li>
            <li>
              <a href="https://www2.microstrategy.com/producthelp/Current/Cloud/en-us/Content/select_environ_type.htm">
                Live version
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>MICROSTRATEGY CLOUD PLATFORM DOCUMENTATION</h3>
        <h4>END-USER DOCS: PROCEDURE</h4>
        <p>2019</p>
        <p>
          This page provides two simple procedures for starting and stopping a
          cloud environment.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://marcin.s-j.me/media/2019-MicroStrategy-Cloud-Platform-(How-to-Start-or-Stop-an-Environment).pdf">
                PDF
              </a>
            </li>
            <li>
              <a href="https://www2.microstrategy.com/producthelp/Current/Cloud/en-us/Content/start_stop_environ.htm">
                Live version
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>STRAAL DOCUMENTATION</h3>
        <h4>END-USER DOCS</h4>
        <p>2017</p>
        <p>
          While working at <a href="https://straal.com/pl/">Straal</a>, I
          created their end-user documentation from scratch. It contains a mix
          of explanations of how the card payment ecosystem works, and how to
          use Straal services. It combines high‑level business narrative, while
          remaining down‑to‑earth, like end‑user documentation should.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://marcin.s-j.me/media/2017-Straal-Documentation-(Payment-Methods).pdf">
                PDF (sample)
              </a>
            </li>
            <li>
              <a href="https://docs.straal.com/">Live version</a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>STRAAL DOCUMENTATION</h3>
        <h4>API REFERENCE</h4>
        <p>2017</p>
        <p>
          While working at <a href="https://straal.com/pl/">Straal</a>, I also
          updated and streamlined their existing API Reference. This document is
          highly technical and centered around the API endpoints and request
          workloads served by this API.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://marcin.s-j.me/media/2017-Straal-API-Reference-sample.pdf">
                PDF (sample)
              </a>
            </li>
            <li>
              <a href="https://api-reference.straal.com/">Live version</a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>BENERATOR CUMBERPY</h3>
        <h4>README</h4>
        <p>2017</p>
        <p>
          This is a README of my silly Python package. I wrote it in
          reStructuredText, because it works better than Markdown when uploading
          packages to the Python Package Index.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://marcin.s-j.me/media/2017-benerator-cumberpy-README.pdf">
                PDF
              </a>
            </li>
            <li>
              <a href="https://github.com/fdmarcin/benerator-cumberpy/blob/master/README.rst">
                Live version
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
