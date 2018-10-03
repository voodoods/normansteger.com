import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('<Skills /> component View', () => {
  it('renders without crashing', () => {
    const props = {
      location: {
        pathname: '/home/',
      },
      softSkills: [
        {
          logo: 'bla',
          name: 'bla bla',
          description: 'bla bla bla.',
        },
      ],
      codeSkills: [
        {
          logo: 'bla',
          name: 'bla bla',
          description: 'bla bla bla.',
        },
      ],
    }
    const wrapper = shallow(<View {...props} />)
    expect(wrapper.find('.Skills')).toHaveLength(1)
  })
})
