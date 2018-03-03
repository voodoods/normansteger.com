import React, { Component } from 'react';
import Header from './header/Header'
import Blog from './blog/Blog'
import StyledHome from './Home.styled'

class Home extends Component {
  render() {
    return (
      <StyledHome className="Home">
       <Header />
       <Blog />
      </StyledHome>
    );
  }
}

export default Home;
