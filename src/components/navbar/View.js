import React from 'react'
import PropTypes from 'prop-types'
import StyledNavbar from './styles'
import items from './Navbar.items.json'

const Navbar = ({ activePath }) => (
  <StyledNavbar className="Navbar pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
    <ul className="pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
      {items.map((item, index) => (
        <li key={index} className="pure-u-lg-1 pure-u-md-1 pure-u-sm-1">
          <a href={item.route} className={activePath === item.route ? 'active' : 'inactive'}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </StyledNavbar>
)

Navbar.propTypes = {
  items: PropTypes.array,
  activePath: PropTypes.string,
}

export default Navbar
