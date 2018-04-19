import React from 'react'
import { shallow } from 'enzyme'
import Imprint from './Imprint'

describe('<Skills />', () => {
  it('renders without crashing', () => {
    const location = { pathname: '/imprint/' }
    const wrapper = shallow(<Imprint location={location} />)
    expect(wrapper.find('.Imprint')).toHaveLength(1)
  })
})
