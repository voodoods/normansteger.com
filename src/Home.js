import React, { Component } from 'react';
import Header from './header/Header'
import StyledHome from './Home.styled'

class Home extends Component {
  render() {
    return (
      <StyledHome className="Home">
       <Header />
      </StyledHome>
    );
  }
}

export default Home;
