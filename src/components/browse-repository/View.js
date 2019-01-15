import React from 'react'
import PropTypes from 'prop-types'
import StyledBrowseRepository from './styles'
import 'font-awesome/css/font-awesome.min.css'

const BrowseRepository = ({ openInNewTab }) => (
  <StyledBrowseRepository
    onClick={() => openInNewTab('https://github.com/voodoods/normansteger.com/')}
    className="BrowseRepository pure-u-1"
  >
    <div className="content-left">
      <i className="fa fa-code-fork fa-3x" />
    </div>
    <div className="content-right">
      <b>Want to take a look into the code?</b>
      <br />
      <span>Browse the repository of this site!</span>
    </div>
  </StyledBrowseRepository>
)

BrowseRepository.propTypes = {
  openInNewTab: PropTypes.func,
}

export default BrowseRepository
