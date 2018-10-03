import React from 'react'
import { shallow } from 'enzyme'
import Imprint from '../'

describe('<Imprint /> component index', () => {
  it('renders without crashing', () => {
    const props = { location: { pathname: '/imprint/' } }
    const wrapper = shallow(<Imprint {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
