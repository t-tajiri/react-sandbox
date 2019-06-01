import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/cat">cat</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;