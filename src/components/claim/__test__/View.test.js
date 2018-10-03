import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('<Claim /> component View', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<View />)
    expect(wrapper.find('.Claim')).toHaveLength(1)
  })
})
