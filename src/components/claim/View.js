import React from 'react'
import StyledClaim from './styles'
import Button from '../button'

export const Claim = () => (
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

export default Claim
