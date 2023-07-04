// Style your elements here
import styled from 'styled-components'

export const OuterDiv = styled.div`
  background-image: linear-gradient(
    from ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
`
