import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('Header.js', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('render without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('set text in header', () => {
    wrapper.setProps({ text: 'this text proped by test'})
    expect(wrapper.find('#header-text').text()).toBe('this text proped by test')
  })
})