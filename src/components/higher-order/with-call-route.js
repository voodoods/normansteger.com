import { compose, withProps } from 'recompose'

export const withCallRoute = withProps(({ route }) => ({
  callRoute: () => (window.location.href = route),
}))

export default compose(withCallRoute)
