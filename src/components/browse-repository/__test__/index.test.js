import React from 'react'
import { shallow } from 'enzyme'
import BrowseRepository from '../'

describe('<BrowseRepository /> component index', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<BrowseRepository />).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
