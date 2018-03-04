import React, { Component } from 'react';
import Header from '../header/Header'
import Claim from '../claim/Claim'
import StyledHome from './Home.styled'

class Home extends Component {
  render() {
    return (
      <StyledHome className="Home">
       <Header />
       <Claim />
      </StyledHome>
    );
  }
}

export default Home;
