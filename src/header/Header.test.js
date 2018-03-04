import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('.Header')).toHaveLength(1)
  })

  it('should contain a "#logo" section with an image inside', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('#logo img')).toHaveLength(1)
  })
  it('should contain a ".title" section', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('.title')).toHaveLength(1)
  })
})
