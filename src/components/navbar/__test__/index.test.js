import React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../'

describe('<Navbar /> component index', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper).toMatchSnapshot()
  })
})
