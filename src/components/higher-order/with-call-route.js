import { withProps } from 'recompose'

export const withCallRoute = withProps(({ route }) => ({
  callRoute: () => (window.location.href = route),
}))
