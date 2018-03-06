import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledSkills from './Skills.styled'
import SkillCard from './skill-card/SkillCard'
import ContentNotFound from '../content-not-found/ContentNotFound'
import Navbar from '../navbar/Navbar'

import { softSkills, codeSkills } from './skills-data.js'

class Skills extends Component {
  constructor(props) {
    super(props)

    this.state = {
      softSkills,
      codeSkills,
    }
  }

  render() {
    return (
      <StyledSkills className="Skills">
        {this.state.softSkills.length === 0 && <ContentNotFound />}

        <Navbar path={this.props.location.pathname} />

        {this.state.softSkills.length > 0 && (
          <div>
            <h3>
              <a name="professions">My Professions</a>
            </h3>
            {this.state.softSkills.map((skill, index) => {
              return <SkillCard key={index} logo={skill.logo} name={skill.name} description={skill.description} />
            })}
            <p />
            <br />
            <hr />
            <p />
            <h3>
              <a name="tools">Tools of Choice</a>
            </h3>
            {this.state.codeSkills.map((skill, index) => {
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
  }
}

Skills.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Skills
