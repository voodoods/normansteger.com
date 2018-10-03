import React from 'react'
import { shallow } from 'enzyme'
import SocialContacts from '../'

describe('<SocialContacts /> component index', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SocialContacts />)
    expect(wrapper).toMatchSnapshot()
  })
})
