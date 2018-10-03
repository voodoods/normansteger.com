import React from 'react'
import { shallow } from 'enzyme'
import SkillCard from '../View'

describe('<SkillCard /> component View', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SkillCard />)
    expect(wrapper.find('.SkillCard')).toHaveLength(1)
  })
})
