import React from 'react'
import { shallow } from 'enzyme'
import SkillCard from './SkillCard'

describe('<SkillCard />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SkillCard />)
    expect(wrapper.find('.SkillCard')).toHaveLength(1)
  })
})
