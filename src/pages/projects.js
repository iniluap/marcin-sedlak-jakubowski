import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ResourceLinks from '../components/ResourceLinks';

export default function ProjectsPage() {
  return (
    <>
      <SectionHeader sectionTitle="Projects" />
      <section>
        <h3>Benerator Cumberpy</h3>
        <p>
          A pure Python package to make up names like Benevolent Cucumber or
          Benefits Coordination.
        </p>
        <ResourceLinks
          link1Url="https://github.com/fdmarcin/benerator-cumberpy"
          link1="GitHub"
        ></ResourceLinks>
      </section>

      <section className="m-top-4">
        <h3>Where in the world is the iss?</h3>
        <p>
          A Python package to print the current location of the ISS. Currently
          uses NumPy and SciPy, so pretty heavy.
        </p>
        <ResourceLinks
          link1Url="https://github.com/fdmarcin/whereiss"
          link1="GitHub"
        ></ResourceLinks>
      </section>
    </>
  );
}
