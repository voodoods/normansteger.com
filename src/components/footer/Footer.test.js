import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('<Button />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.Footer')).toHaveLength(1)
  })
})
