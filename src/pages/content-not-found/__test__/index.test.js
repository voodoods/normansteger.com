import React from 'react'
import { shallow } from 'enzyme'
import ContentNotFound from '../'

describe('<ContentNotFound /> component index', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<ContentNotFound />).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
