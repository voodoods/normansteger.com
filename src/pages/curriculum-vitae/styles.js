import styled from 'styled-components'

const StyledCv = styled.div`
  padding: 6em 6em 3em 6em;
  width: 80%;

  h3 {
    font-size: 3em;
    margin-bottom: 0.5em;
    width: 100%;
    float: left;
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 2em;
    }
    padding: 1em;
    width: 100%;
  }
`

export default StyledCv
