import React, { Component } from 'react';
import logo from './ns-logo2016.svg'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img id="logo" src={logo} alt="Logo - Norman Steger, Software Developer" title="Home" />
        <div className="title">
          <h1>Norman Steger</h1>&nbsp;
          <h2>Software Developer</h2>
        </div>
      </div>
    );
  }
}

export default Header;
