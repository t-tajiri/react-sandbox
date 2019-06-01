import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('Header.js', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('render without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })
})