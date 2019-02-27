import React from 'react'
import PropTypes from 'prop-types'
import StyledImprint from './styles'

const Imprint = () => (
  <StyledImprint className="Imprint pure-u-lg-3-5 pure-u-md-1 pure-u-sm-1">
    <div>
      <h3>
        <a name="imprint">Imprint</a>
      </h3>
      <p>
        <b>This website is owned and operated by: </b>
        <br />
        Norman Steger
        <br />
      </p>
      <p>
        <b>Contact:</b> <br />
        eMail: <a href="mailto:me@normansteger.com">me@normansteger.com</a>
        <br />
      </p>
      <p>
        <br />
        <h3>Disclaimer: </h3>
        <b>Purpose of this site</b>
        <br />
        <br />
        This website is for sole informational purposes about its representative as a professional. It does not offer
        any sort of commercial services or products nor does it follow any commercial purposes in any way.
        <br />
        <br />
        <b>Cookies and Data Tracking</b>
        <br />
        <br />
        Because I have no interest in tracking data that is directly or indirectly related to you as a person or your
        behavior on this website I will take care to the best of my abilities not to use any kind of technologies that
        allow the tracking or storage of personal or usage related data on this website. This also means that I will
        take immediate action to remove such technologies from this website should they ever become part of it without
        my knowledge.
        <br />
        <br />
        <b>Liability for external Links / References</b>
        <br />
        <br />
        Our offer contains links to external websites of third parties whose contents I have no influence on. Therefore,
        I can not assume any liability for these external contents. Responsibility for the contents of the linked Pages
        lies with their respective provider or operator. The linked pages were checked for possible legal violations at
        the time of linking. Illegal contents were to Time of linking not recognizable. A permanent content control of
        the linked pages is but without concrete evidence of an infringement unreasonable. Upon becoming aware of
        Violations, I will remove such links immediately.
        <br />
        <br />
      </p>
      <br />
    </div>
  </StyledImprint>
)

Imprint.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Imprint
