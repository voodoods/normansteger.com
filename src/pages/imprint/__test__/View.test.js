import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('<Imprint /> component View', () => {
  it('renders without crashing', () => {
    const location = { pathname: '/imprint/' }
    const wrapper = shallow(<View location={location} />)
    expect(wrapper.find('.Imprint')).toHaveLength(1)
  })
})
