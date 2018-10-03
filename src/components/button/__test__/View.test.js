import React from 'react'
import { shallow } from 'enzyme'
import Button from '../View'

describe('<Button /> component View', () => {
  it('expects View to contain a ".Button" class', () => {
    const wrapper = shallow(<Button />).dive()
    expect(wrapper.find('.Button')).toHaveLength(1)
  })
})
