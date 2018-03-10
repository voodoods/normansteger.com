import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledNavbar from './Navbar.styled'

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar className="Navbar pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
        <ul className="pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
          <li className="pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
            <a href="/skills" className={this.props.path === '/skills' ? 'active' : 'inactive'}>
              My Professions
            </a>
          </li>
          <li className="pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
            <a href="/about-me" className={this.props.path === '/about-me' ? 'active' : 'inactive'}>
              About me
            </a>
          </li>
          <li className="pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
            <a href="/hire-me" className={this.props.path === '/hire-me' ? 'active' : 'inactive'}>
              Hire me
            </a>
          </li>
        </ul>
      </StyledNavbar>
    )
  }
}

Navbar.propTypes = {
  path: PropTypes.string,
}

export default Navbar
