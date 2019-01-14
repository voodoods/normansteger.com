import React from 'react'
import PropTypes from 'prop-types'
import Claim from '../../components/claim'
import Navbar from '../../components/navbar'
import BrowseRepository from '../../components/browse-repository'
import StyledHome from './styles'

const Home = ({ location }) => (
  <StyledHome className="Home pure-u-1">
    <Navbar activePath={location.pathname} />
    <Claim />
    <BrowseRepository />
  </StyledHome>
)

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Home
