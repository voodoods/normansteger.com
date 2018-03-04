import React, { Component } from 'react';
import StyledClaim from './Claim.styled'

class Home extends Component {
  render() {
    return (
      <StyledClaim className="Claim">
        <h3>I create Web Applications</h3>
        <span>User Friendly. Responsive. Test Driven.</span>
      </StyledClaim>
    );
  }
}

export default Home;
