import React from 'react'
import { shallow } from 'enzyme'
import Claim from '../'

describe('<Claim /> component index', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<Claim />).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
