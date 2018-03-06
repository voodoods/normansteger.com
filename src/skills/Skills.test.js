import React from 'react'
import { shallow } from 'enzyme'
import Skills from './Skills'

describe('<Skills />', () => {
  it('renders without crashing', () => {
    const location = { pathname: '/home/' }
    const wrapper = shallow(<Skills location={location} />)
    expect(wrapper.find('.Skills')).toHaveLength(1)
  })
})
