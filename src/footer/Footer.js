import React, { Component } from 'react'
import StyledFooter from './Footer.styled'

class Footer extends Component {
  callRoute(route) {
    window.location.href = route
  }

  render() {
    return (
      <StyledFooter className="Footer pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
        <div className="pure-u-lg-1-2 pure-u-md-1-2 pure-u-sm-1">
          Norman Steger &copy; 2018. Built with <i className="fa fa-heart" aria-hidden="true" /> and{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>.
        </div>
        <div className="mailcontact pure-u-lg-1-2 pure-u-md-1-2 pure-u-sm-1">
          Contact me at <a href="mailto:me@normansteger.com">me@normansteger.com</a>
        </div>
      </StyledFooter>
    )
  }
}

export default Footer
