import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id="header-text">
            { this.props.text }
          </p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header;