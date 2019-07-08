import React from 'react'
import { shallow } from 'enzyme'
import AddTodo from '../../components/AddTodo'
const actions = require('../../actions')

jest.mock('react-redux')

describe('AddTodo.jsx', () => {
  let wrapper
  const fakeEvent = { preventDefault: jest.fn() }

  beforeEach(() => {
    actions.addTodo = jest.fn()
    wrapper = shallow(<AddTodo />)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders self', () => {
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it.skip('should not dispatch if input is blank', () => {
    wrapper.find('input').simulate('change', { target: { value: 'testInput' } })
    wrapper.find('form').simulate('submit', fakeEvent)

    // FIXME: TypeError: Cannot read property 'value' of undefined
    expect(actions.addTodo).not.toBeCalled()
  })

  it.skip('should dispatch if input is not blank', () => {
    wrapper.find('input').simulate('change', { target: { value: 'testInput' } })
    wrapper.find('form').simulate('submit', fakeEvent)

    // FIXME: TypeError: Cannot read property 'value' of undefined
    expect(wrapper.find('form').props().onSubmit).toBeCalled()
  })
})