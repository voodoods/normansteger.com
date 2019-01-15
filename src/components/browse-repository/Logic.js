import { withProps } from 'recompose'

const withOpenInNewTab = withProps(() => ({
  openInNewTab: url => window.open(url),
}))

export default withOpenInNewTab
