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
      padding: 0 0 0 15px;
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

  .socials {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    padding: 15px 3em;
    height: 10%;
  }

  @media (max-width: 768px) {
    .title.pure-u-md-1,
    .title.pure-u-sm-1 {
      display: block;
      height: auto;
      padding: 1em;
      text-align: center;

      h1,
      h2 {
        display: block;
        padding: 0;
        margin: 0;
      }
      h1 {
        font-size: 1.5em;
      }

      #logo {
        width: 75px;
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

    .socials {
      justify-content: center;
    }

    .pure-u-sm-1 {
      width: 100%;
      text-align: center;

      .SocialContacts {
        display: inline-block;
        float: none;
        margin: auto;
        padding-top: 0;
      }
    }
  }
`

export default StyledHeader
