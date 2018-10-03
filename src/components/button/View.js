import React from 'react'
import StyledButton from './styles'
import PropTypes from 'prop-types'

const Button = ({ text, primary, callRoute }) => (
  <StyledButton onClick={callRoute} className="Button pure-u-lg-2-5 pure-u-sm-1" primary={primary}>
    {text}
  </StyledButton>
)

Button.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
  primary: PropTypes.bool,
  callRoute: PropTypes.func,
}

export default Button
