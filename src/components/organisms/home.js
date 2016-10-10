import R from 'ramda';
import React from 'react';
import Header from '../molecules/header';
import Footer from '../molecules/footer';
import ProjectLink from '../molecules/project-link';
import Projects from '../../data';

export default function () {
  return (
    <div className="home-page">
      <Header />
      <span className="projects-title">PROJECTS</span>
      <div className="projects">
        {
          R.map(
            img => <ProjectLink />,
            Projects
          )
        }
      </div>
      <Footer />
    </div>
  );
}
