import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Header from '../Header';

configure({ adapter: new Adapter() });
describe('App.js', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('props Header component', () => {
    expect(wrapper.find(Header).prop('text')).toBe('Hello World!')
  })
})
