import React, { Component } from 'react'
import StyledSkillCard from './SkillCard.styled'
import PropTypes from 'prop-types'

class SkillCard extends Component {
  render() {
    return (
      <StyledSkillCard className="SkillCard" centered={this.props.centered}>
        <div className="skill-logo">
          <img src={this.props.logo} alt={this.props.name} />
        </div>
        <div className="skill-story">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
      </StyledSkillCard>
    )
  }
}

SkillCard.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  centered: PropTypes.booelean,
}

export default SkillCard
