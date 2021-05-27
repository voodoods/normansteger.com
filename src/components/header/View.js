import React from 'react'
import SocialContacts from '../social-contacts/'
import logo from '../../assets/ns-logo2016.svg'
import StyledHeader from './styles'

const Header = () => (
  <StyledHeader className="Header pure-u-1">
    <div className="title pure-u-lg-19-24 pure-u-md-16-24 pure-u-sm-1">
      <a href="/">
        <img id="logo" src={logo} alt="Logo - Norman Steger, Software Developer" title="Home" />
      </a>
      <h1 className="pure-u-lg-5-24 pure-u-md-5-24 pure-u-sm-1">Norman Steger</h1>&nbsp;
      <h2 className="pue-u-lg-19-24 pure-u-md-19-24 pure-u-sm-1">
        UI / UX Designer &middot; Fullstack Software Engineer
      </h2>
    </div>
    <div className="socials pure-u-lg-5-24 pure-u-md-8-24 pure-u-sm-1">
      <SocialContacts />
    </div>
  </StyledHeader>
)

export default Header
