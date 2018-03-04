import React, { Component } from 'react'
import StyledClaim from './Claim.styled'
import Button from '../button/Button'

class Home extends Component {
  render() {
    return (
      <StyledClaim className="Claim">
        <h3>I create Web Applications</h3>
        <span>User Friendly. Performant. Responsive. Test Driven.</span>
        <p className="seperator">
          <Button text="Find out more" route="/skills" />
          <Button text="Want to hire me?" route="/" />
        </p>
      </StyledClaim>
    )
  }
}

export default Home
