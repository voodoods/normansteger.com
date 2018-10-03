import { compose, withProps } from 'recompose'

export const withGetGroup = withProps(({ jobSet }) => ({
  getGroup: groupName => {
    return jobSet.filter(job => job.group === groupName)
  },
}))

export const withJobGroups = withProps(({ getGroup }) => ({
  jobGroups: {
    internships: getGroup('Internships'),
    training: getGroup('Training'),
    employments: getGroup('Employments'),
    certificates: getGroup('Certificates'),
  },
}))

export default compose(withGetGroup, withJobGroups)
