import React from 'react'
import { shallow } from 'enzyme'
import Header from '../'

describe('<Header /> component index', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
