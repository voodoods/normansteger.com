import React, { Component } from 'react'
import StyledButton from './Button.styled'
import PropTypes from 'prop-types'

class Button extends Component {
  static defaultProps = {
    text: 'Button',
  }

  callRoute(route) {
    window.location.href = route
  }

  render() {
    return (
      <StyledButton onClick={() => this.callRoute(this.props.route)} className="Button">
        {this.props.text}
      </StyledButton>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
}

export default Button
