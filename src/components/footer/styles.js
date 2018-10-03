import styled from 'styled-components'

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  padding: 15px 3em;
  background: #eee;
  font-size: 0.9em;
  opacity: 0.8;

  @media (max-width: 1024px) {
    position: static;
    text-align: center;
    line-height: 1.6em;
    width: 100%;
  }

  a,
  .fa {
    color: #72868e;
  }

  .mailcontact {
    text-align: right;
    @media (max-width: 1024px) {
      text-align: center;
    }
  }
`

export default StyledFooter
