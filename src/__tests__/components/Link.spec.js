import React from 'react'
import { shallow } from 'enzyme'
import Link from '../../components/Link'

const mockDispatch = jest.fn()

jest.mock('react-redux', () => {
  return {
    useSelector: () => true,
    useDispatch: () => mockDispatch
  }
})

describe('Link.jsx', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Link filter={ false } children={ 'test' }/>)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render self without crash', () => {
    expect(wrapper.find('button').text()).toBe('test')
  })

  it('dispatch filtering when it clicked', () => {
    wrapper.find('button').simulate('click')

    expect(mockDispatch).toBeCalled()
  })

  it('should be disabled', () => {
    expect(wrapper.find('button').prop('disabled')).toBe(true)
  })
})