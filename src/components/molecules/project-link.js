import React from 'react';
import R from 'ramda';

class ProjectLink extends React.Component {
  render() {
    const { name, blurb, tags, content, previewImg, openProject } = this.props;

    return (
      <div className="project-link">
        <img src={previewImg} />
        <div className="project-link__hover">
          <h1>{name}</h1>
          <p>{blurb}</p>
          <ul>
            {
              R.map( item => <li>{item}</li>, tags )
            }
          </ul>
          <button onClick={() => openProject( name, content )}>. . .</button>
        </div>
      </div>
    );
  }
}

export default ProjectLink;
