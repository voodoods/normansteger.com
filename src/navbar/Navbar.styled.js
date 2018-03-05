import styled from 'styled-components'

const StyledNavbar = styled.div`
  ul {
    margin: 3em 0;
    padding: 0;
    li {
      display: inline-block;
      margin-right: 1em;
      list-style: none;

      a {
        color: #aaa;
        text-decoration: none;
        padding: 0.5em 0;

        &:hover {
          border-bottom: 1px solid #aaa;
        }
      }

      .active {
        color: #000;
        border-bottom: 1px solid #000;
      }
    }
  }
`

export default StyledNavbar
