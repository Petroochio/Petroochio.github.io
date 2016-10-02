import R from 'ramda';
import React from 'react';
import Header from '../molecules/header';
import Footer from '../molecules/footer';
import ProjectLink from '../molecules/project-link';

export default function () {
  return (
    <div className="home-page">
      <div className="container">
        <Header />
        <div className="scroll-link">
          <span>View Projects</span>
          <span className=""></span>
        </div>
        <span className="projects-title">PROJECTS</span>
        <div className="projects">
          {
            R.map(
              img => <ProjectLink />,
              [1,1,1,1,1,1]
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
