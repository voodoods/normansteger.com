import React, { Component } from 'react'
import StyledClaim from './Claim.styled'
import Button from '../button/Button'

class Home extends Component {
  render() {
    return (
      <StyledClaim className="Claim">
        <div className="pure-u-lg-3-5 pure-u-md-1 pure-u-sm-1">
          <h3>I create Web Applications</h3>
          <span>User Friendly. Performant. Responsive. Test Driven.</span>

          <div className="seperator">
            <Button text="Find out more" route="/skills" primary={true} />
          </div>
        </div>
      </StyledClaim>
    )
  }
}

export default Home
