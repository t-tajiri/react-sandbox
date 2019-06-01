import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Header = () => {
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
  )
}

export default Header