import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledNavbar from './Navbar.styled'
import items from './Navbar.items.json'

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar className="Navbar pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
        <ul className="pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
          {items.map((item, index) => (
            <li key={index} className="pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
              <a href={item.route} className={this.props.activePath === item.route ? 'active' : 'inactive'}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </StyledNavbar>
    )
  }
}

Navbar.propTypes = {
  items: PropTypes.array,
  activePath: PropTypes.string,
}

export default Navbar
