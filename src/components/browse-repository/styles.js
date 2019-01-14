import styled from 'styled-components'

const StyledBrowseRepository = styled.div`
  width: 30%;
  font-size: 0.8em;
  cursor: pointer;

  b,
  span,
  i {
    color: #ccc;
    line-height: 1.6em;
  }

  .content-left,
  .content-right {
    float: left;
  }

  .content-right {
    margin: 10px 15px;
  }

  &:hover {
    b,
    span,
    i {
      color: #000;
    }
  }
`

export default StyledBrowseRepository
