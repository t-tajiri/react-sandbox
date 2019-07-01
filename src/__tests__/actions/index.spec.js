import * as actions from '../../actions/index'

describe('index.js', () => {
  it('should create an action to add a todo', () => {
    const text = 'test todo'
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text
    }

    expect(actions.addTodo(text)).toEqual(expectedAction)
  })

  it('should create an action to set visibility filter', () => {
    const filter = 'test filter'
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }

    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction)
  })

  it('should create an action to toggle todo', () => {
    const id = 1
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id
    }

    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })
})