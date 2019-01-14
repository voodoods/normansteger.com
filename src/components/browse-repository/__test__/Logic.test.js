import React from 'react'
import { compose } from 'recompose'
import { shallow } from 'enzyme'
import Logic from '../Logic'

describe('<BrowseRepository /> components Logic', () => {
  describe('withOpenInNewTab', () => {
    it('should return a "openInNewTab" method as props', () => {
      const Dummy = () => <div>Dummy</div>
      const Component = compose(Logic)(Dummy)
      const wrapper = shallow(<Component />)

      expect(wrapper.props().openInNewTab).toBeDefined()
    })
  })
})
