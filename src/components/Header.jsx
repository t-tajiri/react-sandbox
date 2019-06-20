import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/App.css'

const Header = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">TODO</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header