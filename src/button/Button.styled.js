import styled from 'styled-components'

const StyledButton = styled.div`
  display: inline-block;
  padding: 1em 2em;
  margin: 0 10px 10px 0;
  border-radius: 5px;
  background: #333;
  color: ${props => (props.primary ? '#fff' : '#000')};
  background: ${props => (props.primary ? '#000' : '#fff')};
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    background: ${props => (props.primary ? '#555' : '#eee')};
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export default StyledButton
