import React, { Component } from 'react'
import StyledNavbar from './Navbar.styled'

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar className="Navbar">
        <ul>
          <li>
            <a href="/skills">My Professions</a>
          </li>
          <li>
            <a href="/about-me">About me</a>
          </li>
          <li>
            <a href="/hire-me">Hire me</a>
          </li>
        </ul>
      </StyledNavbar>
    )
  }
}

export default Navbar
