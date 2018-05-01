import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledImprint from './Imprint.styled'

class Imprint extends Component {
  render() {
    return (
      <StyledImprint className="Imprint pure-u-lg-3-5 pure-u-md-1 pure-u-sm-1">
        <div>
          <h3>
            <a name="imprint">Imprint</a>
          </h3>
          <p>All informations according to § 5 TMG</p>
          <p>
            Norman Steger <br />
            Steinweg 26a<br />
            93059 Regensburg <br />
          </p>
          <p>
            <b>Represented by: </b>
            <br />
            Norman Steger<br />
          </p>
          <p>
            <b>Contact:</b> <br />
            eMail: <a href="mailto:me@normansteger.com">me@normansteger.com</a>
            <br />
          </p>
          <p>
            <br />
            <h3>Disclaimer: </h3>
            <br />
            <b>Cookies and Data Tracking</b>
            <br />
            <br />
            Because I have no interest in tracking data that is directly or indirectly related to you as a person or
            your behavior on this website I will take care to the best of my abilities not to use any kind of
            technologies that allow the tracking or storage of personal or usage related data on this website. This also
            means that I will take immediate action to remove such technologies from this website should they ever
            become part of it without my knowledge.
            <br />
            <br />
            <b>Liability for external Links / References</b>
            <br />
            <br />
            Our offer contains links to external websites of third parties whose contents I have no influence on.
            Therefore, I can not assume any liability for these external contents. Responsibility for the contents of
            the linked Pages lies with their respective provider or operator. The linked pages were checked for possible
            legal violations at the time of linking. Illegal contents were to Time of linking not recognizable. A
            permanent content control of the linked pages is but without concrete evidence of an infringement
            unreasonable. Upon becoming aware of Violations, I will remove such links immediately.<br />
            <br />
          </p>
          <br />
        </div>
      </StyledImprint>
    )
  }
}

Imprint.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Imprint
