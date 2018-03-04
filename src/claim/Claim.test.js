import React from 'react'
import { shallow } from 'enzyme'
import Claim from './Claim'

describe('<Claim />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Claim />)
    expect(wrapper.find('.Claim')).toHaveLength(1)
  })
})
