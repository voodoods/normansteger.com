import styled from 'styled-components'

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  background: #333;

  @media (max-width: 768px) {
    position: static;

    a {
      display: inline-block;
    }
  }

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

  .title.pure-u-md-1,
  .title.pure-u-sm-1 {
    display: block;
    height: auto;
    padding: 1em;
    text-align: center;

    h1,
    h2 {
      display: block;
    }
    h1 {
      font-size: 2em;
    }

    #logo {
      width: 100px;
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

  .pure-u-sm-1 {
    text-align: center;

    .SocialContacts {
      display: inline-block;
      float: none;
      margin: auto;
      padding-top: 0;
    }
  }
`

export default StyledHeader
