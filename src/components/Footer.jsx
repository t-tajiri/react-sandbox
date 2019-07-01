import React from 'react'
import Link from '../components/Link'
import { VisibilityFilter } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <Link filter={ VisibilityFilter.SHOW_ALL }>All</Link>
    <Link filter={ VisibilityFilter.SHOW_ACTIVE }>Active</Link>
    <Link filter={ VisibilityFilter.SHOW_COMPLETED }>Completed</Link>
  </div>

)

export default Footer