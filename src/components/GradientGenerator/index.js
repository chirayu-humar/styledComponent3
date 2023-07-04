import {Component} from 'react'
import {OuterDiv} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {firstColor: '#8ae323', secondColor: '#334155', direction: 'top'}

  render() {
    const {firstColor, secondColor} = this.state
    return (
      <OuterDiv firstColor={firstColor} secondColor={secondColor}>
        <p>upcomming</p>
      </OuterDiv>
    )
  }
}

export default GradientGenerator
