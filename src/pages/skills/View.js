import React from 'react'
import PropTypes from 'prop-types'
import StyledSkills from './styles'
import SkillCard from '../../components/skill-card'
import Navbar from '../../components/navbar'
import ContentNotFound from '../content-not-found'

const Skills = ({ softSkills, codeSkills, location }) => (
  <StyledSkills className="Skills pure-u-lg-3-5 pure-u-md-1 pure-u-sm-1">
    {softSkills.length === 0 && <ContentNotFound />}

    <Navbar activePath={location.pathname} />

    {softSkills.length > 0 && (
      <div>
        <h3>
          <a name="professions">My Professions</a>
        </h3>
        {softSkills.map((skill, index) => {
          return <SkillCard key={index} logo={skill.logo} name={skill.name} description={skill.description} />
        })}
        <p />
        <br />
        <hr />
        <p />
        <h3>
          <a name="tools">Tools of Choice</a>
        </h3>
        {codeSkills.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              logo={skill.logo}
              name={skill.name}
              description={skill.description}
              centered={true}
            />
          )
        })}
      </div>
    )}
  </StyledSkills>
)

Skills.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  softSkills: PropTypes.array,
  codeSkills: PropTypes.array,
}

export default Skills
