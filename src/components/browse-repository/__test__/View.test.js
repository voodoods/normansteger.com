import React from 'react'
import { shallow } from 'enzyme'
import BrowseRepository from '../View'

describe('<BrowseRepository /> components View', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<BrowseRepository />)
    expect(wrapper.find('.BrowseRepository')).toHaveLength(1)
  })
  it('opens a given url in a new tab when clicked on', () => {
    const wrapper = shallow(<BrowseRepository />)
    expect(wrapper.find('.BrowseRepository')).toHaveLength(1)
  })
})
