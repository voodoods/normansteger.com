import styled from 'styled-components'

const StyledClaim = styled.div`
  .pure-u-lg-3-5 {
    height: 90%;
    padding: 2em 0;
  }

  h3 {
    font-size: 3em;
    margin-bottom: 0.5em;
  }

  span {
    font-weight: 300;
    font-size: 1.6em;
    color: #aaa;
  }

  .seperator {
    margin-top: 3em;
  }

  @media (max-width: 768px) {
    .pure-u-md-1,
    .pure-u-sm-1 {
      padding: 1em;
      text-align: center;
    }
  }
`

export default StyledClaim
