import React from 'react'
import { shallow } from 'enzyme'
import SkillCard from '../'

describe('<SkillCard /> component index', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<SkillCard />)
    expect(wrapper).toMatchSnapshot()
  })
})
