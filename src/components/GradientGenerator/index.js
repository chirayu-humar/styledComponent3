import {Component} from 'react'
import {OuterDiv, ButtonsContainer, ColorPicker} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: 'top',
    upcommingFirst: '#8ae323',
    upcommingSecond: '#014f7b',
  }

  changeTheDirection = value => {
    this.setState({
      direction: value,
    })
  }

  changeTheColor = event => {
    const {value} = event.target
    const {id} = event.currentTarget
    if (id === 'first') {
      this.setState({
        upcommingFirst: value,
      })
    } else {
      this.setState({
        upcommingSecond: value,
      })
    }
  }

  generateTheBackground = () => {
    this.setState(prevState => ({
      firstColor: prevState.upcommingFirst,
      secondColor: prevState.upcommingSecond,
    }))
  }

  render() {
    const {
      firstColor,
      secondColor,
      direction,
      upcommingFirst,
      upcommingSecond,
    } = this.state
    return (
      <OuterDiv
        data-testid="gradientGenerator"
        direction={direction}
        firstColor={firstColor}
        secondColor={secondColor}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        {/* special div started */}
        <ButtonsContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              value={direction}
              key={eachItem.directionId}
              changeTheDirection={this.changeTheDirection}
              detail={eachItem}
            />
          ))}
        </ButtonsContainer>
        {/* special div ended */}
        <p>Pick the Colors</p>
        {/* input container */}
        <ColorPicker>
          <div>
            <p htmlFor="first">{upcommingFirst}</p>
            <br />
            <input
              onChange={this.changeTheColor}
              value={upcommingFirst}
              id="first"
              type="color"
            />
          </div>
          <div>
            <p htmlFor="second">{upcommingSecond}</p>
            <br />
            <input
              onChange={this.changeTheColor}
              value={upcommingSecond}
              id="second"
              type="color"
            />
          </div>
        </ColorPicker>
        {/* input container ended */}
        <button onClick={this.generateTheBackground} type="button">
          Generate
        </button>
      </OuterDiv>
    )
  }
}

export default GradientGenerator
