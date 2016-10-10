import React, { Component } from 'react';

class Header extends Component {

  state = {
    isStuck: false,
  }

  _scroll = () => {

    this.setState({
      isStuck: this.refs.placeHolder.getBoundingClientRect().top <=0,
    });
  }

  componentWillMount() {
    window.addEventListener( 'scroll', this._scroll );
  }

  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div ref="placeHolder">
          </div>
          <div className={`${this.state.isStuck ? 'stuck' : ''}`}>
            <div className="header-nav-box container">
              <div className="header-top">
                <h1>Peter Gyory</h1>
                <h2>Interactive Developer</h2>
              </div>
              <div className="header-bottom">
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
