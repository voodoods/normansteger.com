import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/navbar'
import JobCard from '../../components/job-card/JobCard'
import StyledCv from './styles'
import ContentNotFound from '../content-not-found/'

const Cv = ({ jobSet, jobGroups, location }) => (
  <StyledCv className="Cv pure-u-lg-3-5 pure-u-md-1 pure-u-sm-1">
    {jobSet.length === 0 && <ContentNotFound />}

    <Navbar activePath={location.pathname} />

    {jobSet.length > 0 && (
      <div>
        <h3>
          <a name="employments">Employments</a>
        </h3>
        {jobGroups.employments.map((job, index) => {
          return <JobCard key={index} job={job} />
        })}
        <p />
        <h3>
          <a name="trainings">Training</a>
        </h3>
        {jobGroups.training.map((job, index) => {
          return <JobCard key={index} job={job} />
        })}
        <p />
        <h3>
          <a name="internships">Internships</a>
        </h3>
        {jobGroups.internships.map((job, index) => {
          return <JobCard key={index} job={job} />
        })}
        <p />
        <h3>
          <a name="certificates">Certificates</a>
        </h3>
        {jobGroups.certificates.map((job, index) => {
          return <JobCard key={index} job={job} />
        })}
        <p />
      </div>
    )}
  </StyledCv>
)

Cv.propTypes = {
  jobSet: PropTypes.arrayOf(PropTypes.object),
  jobGroups: PropTypes.shape({
    internships: PropTypes.arrayOf(PropTypes.object),
    training: PropTypes.arrayOf(PropTypes.object),
    employments: PropTypes.arrayOf(PropTypes.object),
    certificates: PropTypes.arrayOf(PropTypes.object),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Cv
