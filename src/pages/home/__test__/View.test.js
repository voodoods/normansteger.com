import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('<Home /> component View', () => {
  it('renders without crashing', () => {
    const props = {
      location: {
        pathname: '/',
      },
    }

    const wrapper = shallow(<View {...props} />)
    expect(wrapper.find('.Home')).toHaveLength(1)
  })
})
