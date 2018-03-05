import styled from 'styled-components'

const StyledContentNotFound = styled.div`
  width: 50%;

  img {
    margin-top: 3em;
    width: 50%;
  }

  h3 {
    margin: 0;
  }

  span {
    color: blue;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
`

export default StyledContentNotFound
