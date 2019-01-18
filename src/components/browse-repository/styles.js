import styled from 'styled-components'

const StyledBrowseRepository = styled.div`
  font-size: 0.8em;
  cursor: pointer;

  b,
  span,
  i {
    color: #ccc;
    line-height: 1.6em;
  }

  .block-right {
    margin: 12px 0;
  }

  &:hover {
    b,
    span,
    i {
      color: #000;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 50%;
      margin: 0 25%;
    }

    .block-left,
    .block-right {
      text-align: center;
    }
  }
`

export default StyledBrowseRepository
