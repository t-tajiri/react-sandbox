import React from 'react'
import { shallow } from 'enzyme'
import App from '../../pages/App'

describe('App.js', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
