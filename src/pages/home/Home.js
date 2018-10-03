import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Claim from '../../components/claim/Claim'
import Navbar from '../../components/navbar/Navbar'
import StyledHome from './Home.styled'

class Home extends Component {
  render() {
    return (
      <StyledHome className="Home pure-u-1">
        <Navbar activePath={this.props.location.pathname} />
        <Claim />
      </StyledHome>
    )
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Home
