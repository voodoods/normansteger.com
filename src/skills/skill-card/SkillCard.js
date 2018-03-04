import React, { Component } from 'react'
import StyledSkillCard from './SkillCard.styled'
import PropTypes from 'prop-types'

class SkillCard extends Component {
  render() {
    return (
      <StyledSkillCard className="SkillCard">
        <img src={this.props.logo} alt={this.props.name} />
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </StyledSkillCard>
    )
  }
}

SkillCard.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
}

export default SkillCard
