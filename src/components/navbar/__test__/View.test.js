import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../View'

describe('<Navbar /> component View', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('.Navbar')).toHaveLength(1)
  })
})
