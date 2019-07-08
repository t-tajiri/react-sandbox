import React from 'react'
import { shallow } from 'enzyme'
import Todo from '../../components/Todo'

describe('Todo.jsx', () => {
  let wrapper

  const onClick = jest.fn()
  const text = 'test'

  const createShallowWrapper = (completedProp) => shallow(<Todo onClick={ onClick } text={ text } completed={ completedProp }/>)

  describe('todo is completed', () => {
    beforeEach(() => {
      wrapper = createShallowWrapper(true)
    })

    it('should shows text with line through if todo is completed', () => {
      expect(wrapper.props().style).toEqual({ textDecoration: 'line-through'})
    })

    it('emits event when is clicked', () => {
      wrapper.simulate('click')
      expect(onClick).toBeCalled()
    })
  })

  describe('todo is not completed', () => {
    beforeEach(() => {
      wrapper = createShallowWrapper(false)
    })

    it('should shows plain text if todo is not completed', () => {
      expect(wrapper.props().style).toEqual({ textDecoration: 'none' })
    })
  })
})