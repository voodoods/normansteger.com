import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('<Cv /> components View', () => {
  it('renders without crashing', () => {
    const props = {
      location: {
        pathname: '/some/path',
      },
      jobSet: [
        {
          group: 'Bla bla',
          title: 'Bla bla',
          company: 'Bla bla',
          description: 'Bla bla',
          from: '05/01/2017',
          to: '05/01/2018',
        },
      ],
      jobGroups: {
        internships: [
          {
            title: 'bla',
            company: 'bla',
            description: 'bla',
            from: 'bla',
            to: 'bla',
          },
        ],
        training: [
          {
            title: 'bla',
            company: 'bla',
            description: 'bla',
            from: 'bla',
            to: 'bla',
          },
        ],
        employments: [
          {
            title: 'bla',
            company: 'bla',
            description: 'bla',
            from: 'bla',
            to: 'bla',
          },
        ],
        certificates: [
          {
            title: 'bla',
            company: 'bla',
            description: 'bla',
            from: 'bla',
            to: 'bla',
          },
        ],
      },
    }
    const wrapper = shallow(<View {...props} />)
    expect(wrapper.find('.Cv')).toHaveLength(1)
  })
})
