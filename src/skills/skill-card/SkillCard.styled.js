import styled from 'styled-components'

const StyledSkillCard = styled.div`
  display: ${props => (props.centered ? 'block' : 'inline-flex')};
  align-items: ${props => (props.centered ? '' : 'center')};
  margin: ${props => (props.centered ? '0 2em 2em 0' : '3em 3em 0 0')};
  width: ${props => (props.centered ? '28%' : '100%')};
  float: ${props => (props.centered ? 'left' : 'none')};

  h3 {
    font-size: 1.4em;
    text-align: ${props => (props.centered ? 'center' : 'left')};
  }
  p {
    font-weight: 300;
    text-align: ${props => (props.centered ? 'center' : 'left')};
  }

  .skill-logo,
  .skill-story {
    display: ${props => (props.centered ? 'block' : 'inline-block')};
  }

  .skill-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => (props.centered ? '100%' : '150px')};
    height: ${props => (props.centered ? '100px' : '150px')};
    margin-right: ${props => (props.centered ? '0' : '2em')};
    margin-bottom: ${props => (props.centered ? '0.5em' : '0')};
    text-align: ${props => (props.centered ? 'center' : 'left')};

    img {
      width: ${props => (props.centered ? '100px' : '100%')};
    }
  }

  .skill-story {
    h3 {
      margin-top: 0;
    }

    width: ${props => (props.centered ? '100%' : '500px')};
    height: ${props => (props.centered ? '150px' : 'auto')};
    float: ${props => (props.centered ? 'none' : 'left')};
  }
`

export default StyledSkillCard
