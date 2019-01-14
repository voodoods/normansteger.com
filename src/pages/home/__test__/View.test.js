import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('<Home /> component View', () => {
  let wrapper
  const props = {
    location: {
      pathname: '/',
    },
  }

  beforeEach(() => {
    wrapper = shallow(<View {...props} />)
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.Home')).toHaveLength(1)
  })
  it('renders a Navbar component', () => {
    expect(wrapper.find('Navbar')).toHaveLength(1)
  })
  it('renders a Claim component', () => {
    expect(wrapper.find('Claim')).toHaveLength(1)
  })
  it('renders a BrowseRepository component', () => {
    expect(wrapper.find('withProps(BrowseRepository)')).toHaveLength(1)
  })
})
