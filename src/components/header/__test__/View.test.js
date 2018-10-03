import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('<Header /> component View', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<View />)
    expect(wrapper.find('.Header')).toHaveLength(1)
  })

  it('should contain a "#logo" section with an image inside', () => {
    const wrapper = shallow(<View />)
    expect(wrapper.find('#logo img')).toHaveLength(1)
  })
  it('should contain a ".title" section', () => {
    const wrapper = shallow(<View />)
    expect(wrapper.find('.title')).toHaveLength(1)
  })
})
