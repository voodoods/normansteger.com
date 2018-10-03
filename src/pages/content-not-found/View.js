import React from 'react'
import PropTypes from 'prop-types'
import StyledContentNotFound from './styles'

import brokenRobot from '../../assets/robot_broken.svg'

const ContentNotFound = ({ dropReport }) => (
  <StyledContentNotFound className="ContentNotFound">
    <img src={brokenRobot} alt="Content not Found" />
    <h3>Uh oh... this isn&lsquo;t supposed to happen :(</h3>

    <p>
      If you read this, please take a moment to&nbsp;
      <span onClick={dropReport}>drop me a message</span>. I&lsquo;d be most greatful and will fix the issue as soon as
      I get back to the keyboard.
    </p>
  </StyledContentNotFound>
)

ContentNotFound.propTypes = {
  dropReport: PropTypes.func,
}

export default ContentNotFound
