import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('.Button')).toHaveLength(1)
  })
})
