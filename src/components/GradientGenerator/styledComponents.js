// Style your elements here
import styled from 'styled-components'

export const OuterDiv = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`
export const ColorPicker = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`
