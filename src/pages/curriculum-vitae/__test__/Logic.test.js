import { withJobGroups, withGetGroup } from '../Logic'

describe('<Cv /> components Logic', () => {
  it('should return a "getGroup" method', () => {
    const jobSet = [
      {
        group: 'Bla bla',
        title: 'Bla bla',
        company: 'Bla bla',
        description: 'Bla bla',
        from: '05/01/2017',
        to: '05/01/2018',
      },
    ]

    const hoc = withGetGroup(() => '')({ jobSet })
    expect(hoc.props.getGroup).toBeDefined()
  })

  it('should return a "jobGroups" object', () => {
    const getGroup = jest.fn()

    const hoc = withJobGroups(() => '')({ getGroup })
    expect(hoc.props.jobGroups).toBeDefined()
  })
})
