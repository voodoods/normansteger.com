import React, { Component } from 'react'
import Claim from '../claim/Claim'
import StyledHome from './Home.styled'

class Home extends Component {
  render() {
    return (
      <StyledHome className="Home">
        <Claim />
      </StyledHome>
    )
  }
}

export default Home
