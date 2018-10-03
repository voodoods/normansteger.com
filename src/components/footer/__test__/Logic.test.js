import React from 'react'
import { compose } from 'recompose'
import { shallow } from 'enzyme'
import Logic from '../Logic'

describe('<Footer /> component Logic', () => {
  it('should return a callRoute method as props', () => {
    const Dummy = () => <div>Dummy</div>
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />)

    expect(wrapper.props().callRoute).toBeDefined()
  })
})
