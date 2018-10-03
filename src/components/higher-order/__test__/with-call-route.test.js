import { withCallRoute } from '../with-call-route'

describe('withCallRoute HOC', () => {
  it('should return a callRoute method', () => {
    const hoc = withCallRoute(() => '')({ route: '/some/route' })
    expect(hoc.props.callRoute).toBeDefined()
  })
})
