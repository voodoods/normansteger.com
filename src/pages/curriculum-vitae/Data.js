import { withProps } from 'recompose'

import { jobSet } from './job-set'

export const withJobSets = withProps(() => ({
  jobSet,
}))

export default withJobSets
