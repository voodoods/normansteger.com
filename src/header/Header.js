import React, { Component } from 'react'
import SocialContacts from '../social-contacts/SocialContacts'
import logo from './ns-logo2016.svg'
import StyledHeader from './Header.styled'

class Header extends Component {
  render() {
    return (
      <StyledHeader className="Header pure-u-1">
        <div className="title pure-u-lg-7-12 pure-u-md-1 pure-u-sm-1">
          <a href="/">
            <img id="logo" src={logo} alt="Logo - Norman Steger, Software Developer" title="Home" />
          </a>
          <h1>Norman Steger</h1>&nbsp;
          <h2>UI / UX Designer &middot; Software Developer &middot; Frontend Engineer</h2>
        </div>
        <div className="pure-u-lg-5-12 pure-u-md-1 pure-u-sm-1">
          <SocialContacts />
        </div>
      </StyledHeader>
    )
  }
}

export default Header
