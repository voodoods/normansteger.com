import React, { Component } from 'react'
import StyledSocialContacts from './SocialContacts.styled'
import 'font-awesome/css/font-awesome.min.css'

class SocialContacts extends Component {
  render() {
    return (
      <StyledSocialContacts className="SocialContacts">
        <li>
          <a href="https://twitter.com/voodoods" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter-square fa-2x" />
          </a>
        </li>
        <li>
          <a href="https://www.xing.com/profile/Norman_Steger/cv" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-xing-square fa-2x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/norman-steger-70568284/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square fa-2x" />
          </a>
        </li>
        <li>
          <a href="https://github.com/voodoods" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github-square fa-2x" />
          </a>
        </li>
      </StyledSocialContacts>
    )
  }
}

export default SocialContacts
