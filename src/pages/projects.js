import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function ProjectsPage() {
  return (
    <>
      <SectionHeader sectionTitle="Projects" />
      <section>
        <h3>BENERATOR CUMBERPY</h3>
        <p>
          A pure Python package to make up names like Benevolent Cucumber or
          Benefits Coordination.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://github.com/fdmarcin/benerator-cumberpy">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>WHERE IN THE WORLD IS THE ISS?</h3>
        <p>
          A Python package to print the current location of the ISS. Currently
          uses NumPy and SciPy, so pretty heavy.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://github.com/fdmarcin/whereiss">GitHub</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
