import React from 'react'
import { shallow } from 'enzyme'
import SocialContacts from '../View'

describe('<SocialContacts /> component View', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SocialContacts />)
    expect(wrapper.find('.SocialContacts')).toHaveLength(1)
  })
  it('contains a list with at least one clickable fa-icon', () => {
    const wrapper = shallow(<SocialContacts />)
    expect(wrapper.find('li a .fa').length).toBeGreaterThan(0)
  })
  it('expects all <a> tags to have appropriate refferal attributes', () => {
    const wrapper = shallow(<SocialContacts />)

    wrapper.find('li a').forEach(node => {
      expect(node.prop('rel')).toEqual('noopener noreferrer')
    })
  })
})
