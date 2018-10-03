import React from 'react'
import { shallow } from 'enzyme'
import Home from '../'

describe('<Home /> component index', () => {
  it('expects component to match snapshot', () => {
    const props = {
      location: {
        pathname: '/',
      },
    }

    const wrapper = shallow(<Home {...props} />).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
