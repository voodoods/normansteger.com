import React, { Component } from 'react'
import StyledFooter from './Footer.styled'

class Footer extends Component {
  callRoute(route) {
    window.location.href = route
  }

  render() {
    return (
      <StyledFooter className="Footer pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
        <div className="pure-u-lg-3-4 pure-u-md-3-4 pure-u-sm-1">
          Norman Steger &copy; 2018. Built with <i className="fa fa-heart" aria-hidden="true" /> and{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>. This website is using cookies - for more information <a href="/imprint/">click here</a>!
        </div>
        <div className="mailcontact pure-u-lg-1-4 pure-u-md-1-4 pure-u-sm-1">
          <a href="/imprint/">Imprint & Contact Information</a>
        </div>
      </StyledFooter>
    )
  }
}

export default Footer
