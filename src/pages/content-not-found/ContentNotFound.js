import React, { Component } from 'react'
import StyledContentNotFound from './ContentNotFound.styled'

import brokenRobot from './robot_broken.svg'

class ContentNotFound extends Component {
  dropReport() {
    const email = 'me@normansteger.com'
    const subject = 'Missing content on normansteger.com'
    const emailBody = `Hi there, \n I just encountered a part of missing content on your homepage at he URL: ${
      window.location.href
    } \n Please have a look at it as soon as you can. Thank you!`
    document.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody
  }

  render() {
    return (
      <StyledContentNotFound className="ContentNotFound">
        <img src={brokenRobot} alt="Content not Found" />
        <h3>Uh oh... this isn&lsquo;t supposed to happen :(</h3>

        <p>
          If you read this, please take a moment to&nbsp;
          <span onClick={() => this.dropReport()}>drop me a message</span>. I&lsquo;d be most greatful and will fix the
          issue as soon as I get back to the keyboard.
        </p>
      </StyledContentNotFound>
    )
  }
}

export default ContentNotFound
