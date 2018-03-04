import styled from 'styled-components'

const StyledHeader = styled.div`
  background: #333;

  .title {
    display: inline-flex;
    align-items: center;
    padding: 15px 3em;
    height: 10%;
    h1,
    h2 {
      display: inline;
      font-size: 1em;
      line-height: 1.5em;
      margin: 0 0 0 15px;
    }

    h1 {
      color: #fff;
    }
    h2 {
      color: #aaa;
    }

    #logo {
      width: 50px;
    }
  }

  .SocialContacts {
    float: right;
    padding: 15px 3em;
    height: 10%;

    li {
      display: inline-block;
      margin-right: 5px;

      a {
        color: #c1ccd1;
        transition: 0.2s color ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`

export default StyledHeader
