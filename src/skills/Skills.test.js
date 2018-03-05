import React from 'react'
import { shallow } from 'enzyme'
import Skills from './Skills'

describe('<Skills />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Skills />)
    expect(wrapper.find('.Skills')).toHaveLength(1)
  })
})
