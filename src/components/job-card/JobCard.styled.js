import styled from 'styled-components'

const StyledJobCard = styled.div`
  .jobtable {
    width: 75%;
    margin-right: 2em;
    overflow: hidden;
    float: left;
  }
  .jobtable p {
    margin: 0;
  }
  .jobtable .title {
    font-size: 1.2em;
    color: #aaa;
  }
  .jobtable .company,
  .jobtable .period {
    padding-bottom: 1em;
  }
  .jobtable .period {
    font-size: 0.8em;
    font-style: italic;
  }
  .jobtable .description {
    font-size: 0.8em;
    margin-bottom: 3em;
  }
`

export default StyledJobCard
