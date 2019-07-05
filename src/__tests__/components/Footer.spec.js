import React from 'react'
import Footer from '../../components/Footer'
import { shallow } from 'enzyme'
import Link from '../../components/Link'
import { VisibilityFilter } from '../../actions'

describe('Footer.js', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('shows all filter', () => {
    expect(wrapper.find(Link).length).toBe(3)

    expect(wrapper.find(Link).map(node => node.props().filter))
      .toStrictEqual([
        VisibilityFilter.SHOW_ALL,
        VisibilityFilter.SHOW_ACTIVE,
        VisibilityFilter.SHOW_COMPLETED
      ])
  })
})