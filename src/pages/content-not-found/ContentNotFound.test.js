import React from 'react'
import { shallow } from 'enzyme'
import ContentNotFound from './ContentNotFound'

describe('<ContentNotFound />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ContentNotFound />)
    expect(wrapper.find('.ContentNotFound')).toHaveLength(1)
  })
})
