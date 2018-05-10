import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

const location = {
  pathname: '/',
}

it('renders without crashing', () => {
  const wrapper = shallow(<Home location={location} />)
  expect(wrapper.find('.Home')).toHaveLength(1)
})
