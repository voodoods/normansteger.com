import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../navbar/Navbar'
import JobCard from './job-card/JobCard'
import StyledCv from './Cv.styled'
import ContentNotFound from '../content-not-found/ContentNotFound'

import { jobSet } from './job-set'

class Cv extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobSet,
    }
  }

  getGroup(groupName) {
    return jobSet.filter(job => job.group === groupName)
  }

  render() {
    const internships = this.getGroup('Internships')
    const training = this.getGroup('Training')
    const employments = this.getGroup('Employments')
    const certificates = this.getGroup('Certificates')

    return (
      <StyledCv className="Cv pure-u-lg-3-5 pure-u-md-1 pure-u-sm-1">
        {this.state.jobSet.length === 0 && <ContentNotFound />}

        <Navbar activePath={this.props.location.pathname} />

        {this.state.jobSet.length > 0 && (
          <div>
            <h3>
              <a name="employments">Employments</a>
            </h3>
            {employments.map((job, index) => {
              return <JobCard key={index} job={job} />
            })}
            <p />
            <h3>
              <a name="trainings">Training</a>
            </h3>
            {training.map((job, index) => {
              return <JobCard key={index} job={job} />
            })}
            <p />
            <h3>
              <a name="internships">Internships</a>
            </h3>
            {internships.map((job, index) => {
              return <JobCard key={index} job={job} />
            })}
            <p />
            <h3>
              <a name="certificates">Certificates</a>
            </h3>
            {certificates.map((job, index) => {
              return <JobCard key={index} job={job} />
            })}
            <p />
          </div>
        )}
      </StyledCv>
    )
  }
}

Cv.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Cv
