import React, { Component } from 'react'
import SocialContacts from '../social-contacts/SocialContacts'
import logo from './ns-logo2016.svg'
import StyledHeader from './Header.styled'

class Header extends Component {
  render() {
    return (
      <StyledHeader className="Header">
        <div className="title">
          <img id="logo" src={logo} alt="Logo - Norman Steger, Software Developer" title="Home" />
          <h1>Norman Steger</h1>&nbsp;
          <h2>UI / UX Designer &middot; Software Developer &middot; Frontend Engineer</h2>
        </div>
        <SocialContacts />
      </StyledHeader>
    )
  }
}

export default Header
