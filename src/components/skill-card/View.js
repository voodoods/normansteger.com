import React from 'react'
import StyledSkillCard from './styles'
import PropTypes from 'prop-types'

const SkillCard = ({ logo, name, description, centered }) => (
  <StyledSkillCard className="SkillCard" centered={centered}>
    <div className="skill-logo">
      <img src={logo} alt={name} />
    </div>
    <div className="skill-story">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </StyledSkillCard>
)

SkillCard.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  centered: PropTypes.bool,
}

export default SkillCard
