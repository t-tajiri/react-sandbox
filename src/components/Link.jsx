import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const Link = ({ filter, children }) => {
  const active = useSelector(state => filter === state.visibilityFilter)
  const dispatch = useDispatch()

  return (
    <button
      onClick={ () => dispatch(setVisibilityFilter(filter)) }
      disabled={ active }
      style={{
        marginLeft: '4px'
      }}
    >
      { children }
    </button>
  )
}

Link.prototype = {
  filter: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link