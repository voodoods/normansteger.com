import React, { Component } from 'react';
import Header from './header/Header'
import Blog from './blog/Blog'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
       <Header />
       <Blog />
      </div>
    );
  }
}

export default Home;
