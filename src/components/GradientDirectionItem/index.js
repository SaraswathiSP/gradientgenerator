import {List, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionList, onChangeActiveDirection, isActive} = props
  const {directionId, value, displayText} = directionList

  const onClickDirection = () => {
    onChangeActiveDirection(directionId)
  }

  return (
    <List>
      <Button
        type="button"
        isActive={isActive}
        onClick={onClickDirection}
        value={value}
      >
        {displayText}
      </Button>
    </List>
  )
}

export default GradientDirectionItem
