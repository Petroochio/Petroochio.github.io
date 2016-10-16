import R from 'ramda';
import React from 'react';
import Header from '../molecules/header';
import Footer from '../molecules/footer';
import ProjectLink from '../molecules/project-link';
import ProjectOverlay from './ProjectOverlay';
import Projects from '../../data';

class Home extends React.Component {
  state = {
    projectContent: {},
    projectOpen: false,
  }

  _openOverlay = ( title, content ) => {
    this.setState({
      projectContent: { title, content },
      projectOpen: true,
    })
  }

  _closeOverlay = () => {
    this.setState({
      projectOpen: false,
    })
  }

  render() {
    const { projectOpen, projectContent } = this.state;

    return (
      <div className="home-page">
        <ProjectOverlay isOpen={projectOpen} closeOverlay={this._closeOverlay} {...projectContent} />
        <Header />
        <div id="work">
          <span className="projects-title">PROJECTS</span>
          <div className="projects">
            {
              R.map(
                project => <ProjectLink {...project} openProject={this._openOverlay} />,
                Projects
              )
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
