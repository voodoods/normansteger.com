import React from 'react'
import { compose } from 'recompose'
import { shallow } from 'enzyme'
import Logic from '../Logic'

describe('<ContentNotFound /> components Logic', () => {
  it('should return a "dropReport" method as props', () => {
    const Dummy = () => <div>Dummy</div>
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />)

    expect(wrapper.props().dropReport).toBeDefined()
  })
})
