import React from 'react'
import Todo from './Todo.jsx'
import { toggleTodo } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { VisibilityFilter } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter' + filter)
  }
}

const TodoList = () => {
  const todos = useSelector(state => getVisibleTodos(state.todos, state.visibilityFilter))
  const dispatch = useDispatch()

  return (
    <ul>
      { todos.map(todo => { return (<Todo key={ todo.id } { ...todo } onClick={ () => dispatch(toggleTodo(todo.id)) } />) }) }
    </ul>
  )
}

export default TodoList
