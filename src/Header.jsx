import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Link } from "react-router-dom";
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/cat">cat</Link>
            </li>
            <li>
              <Link to="/dog">dog</Link>
            </li>
          </ul>
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
};

export default Header;