import todos from '../../reducers/todos'

describe('todos.js', () => {
  describe('default action', () => {
    it('should return empty value if state is undefined', () => {
      expect(todos(undefined, {})).toEqual([])
    })
  })

  describe('add todo action', () => {
    it( 'should handle adding todo', () => {
      expect(todos(undefined, {
        type: 'ADD_TODO',
        id: 0,
        text: 'test'
      })).toEqual([{
        id: 0,
        text: 'test',
        completed: false
      }])
    })

    it('should handle extra adding todo', () => {
      const initState = [{
        id: 0,
        text: 'test 1',
        completed: false
      }]

      const newAction = {
        type: 'ADD_TODO',
        id: 1,
        text: 'test 2'
      }

      const expectedState = [
        {
          id: 0,
          text: 'test 1',
          completed: false
        },
        {
          id: 1,
          text: 'test 2',
          completed: false
        }
      ]

      expect(todos(initState, newAction)).toEqual(expectedState)
    })
  })

  describe('toggle todo action', () => {
    it('should handle toggle todo', () => {
      const initState = [
        {
          id: 0,
          text: 'test 1',
          completed: false
        },
        {
          id: 1,
          text: 'test 2',
          completed: false
        }
      ]

      const newAction = {
        type: 'TOGGLE_TODO',
        id: 1,
      }

      const expectedState = [
        {
          id: 0,
          text: 'test 1',
          completed: false
        },
        {
          id: 1,
          text: 'test 2',
          completed: true
        }
      ]

      expect(todos(initState, newAction)).toEqual(expectedState)
    })
  })
})