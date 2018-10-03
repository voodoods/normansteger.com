import React from 'react'
import { shallow } from 'enzyme'
import ContentNotFound from '../View'

describe('<ContentNotFound /> components View', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ContentNotFound />)
    expect(wrapper.find('.ContentNotFound')).toHaveLength(1)
  })
})
