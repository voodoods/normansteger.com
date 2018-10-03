import React, { Component } from 'react'
import StyledJobCard from './JobCard.styled'
import PropTypes from 'prop-types'

class SkillCard extends Component {
  parseDate(date) {
    if (!date) {
      return
    }
    const locale = 'en-us'
    const year = date.getFullYear()
    const month = date.toLocaleString(locale, { month: 'long' })
    const parsedDate = `${month} ${year}`

    return parsedDate
  }

  render() {
    return (
      <StyledJobCard className="JobCard">
        <div className="jobtable">
          <p className="title">{this.props.job.title}</p>
          <p className="company">{this.props.job.company}</p>
          <p className="period">
            {!this.props.job.to && <span>{this.parseDate(this.props.job.from)}</span>}
            {this.props.job.to && (
              <span>
                {this.parseDate(this.props.job.from)} - {this.parseDate(this.props.job.to)}
              </span>
            )}
          </p>
          <p className="description">{this.props.job.description}</p>
        </div>
      </StyledJobCard>
    )
  }
}

SkillCard.propTypes = {
  job: PropTypes.object,
}

export default SkillCard
