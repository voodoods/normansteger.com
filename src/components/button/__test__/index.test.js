import React from 'react'
import { shallow } from 'enzyme'
import Button from '../'

describe('<Button /> component index', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<Button />).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
