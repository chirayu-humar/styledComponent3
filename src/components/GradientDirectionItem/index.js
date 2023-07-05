// Write your code here
import {SpecialBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {detail, changeTheDirection, value} = props
  const isActive = detail.value === value
  const directionChange = () => {
    changeTheDirection(detail.value)
  }

  return (
    <li id={detail.directionId}>
      <SpecialBtn isActive={isActive} onClick={directionChange}>
        {detail.displayText}
      </SpecialBtn>
    </li>
  )
}

export default GradientDirectionItem
