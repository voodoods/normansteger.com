import { withProps, compose } from 'recompose'
import { softSkills, codeSkills } from './skills-data'

export const withSoftSkills = withProps(() => ({
  softSkills,
}))

export const withCodeSkills = withProps(() => ({
  codeSkills,
}))

export default compose(withSoftSkills, withCodeSkills)
