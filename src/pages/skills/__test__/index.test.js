import React from 'react'
import { shallow } from 'enzyme'
import Skills from '../'

describe('<Skills /> component index', () => {
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
    const wrapper = shallow(<Skills {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
