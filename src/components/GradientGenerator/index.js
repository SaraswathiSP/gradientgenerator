import {useState, useEffect} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  Container,
  ResponsiveContainer,
  Heading,
  Para,
  Para1,
  DirectionsList,
  ColorsContainer,
  ColorContainer,
  HexCode,
  Input,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

const GradientGenerator = () => {
  const [activeDirection, setActiveDirection] = useState(
    gradientDirectionsList[0].value,
  )
  const [firstHexCode, setFirstHexCode] = useState('#014f7b')
  const [secondHexCode, setSecondHexCode] = useState('#8ae323')
  const [gradientValue, setGradientValue] = useState(
    `to ${gradientDirectionsList[0].value},#014f7b,#8ae323`,
  )

  const onChangeActiveDirection = id => {
    setActiveDirection(id)
  }

  const generateButton = () => {
    setGradientValue(`to ${activeDirection},${firstHexCode},${secondHexCode}`)
  }

  return (
    <Container data-testid="gradientGenerator" gradientValue={gradientValue}>
      <ResponsiveContainer>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <DirectionsList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              isActive={activeDirection === each.value}
              onChangeActiveDirection={onChangeActiveDirection}
              key={each.directionId}
              directionList={each}
            />
          ))}
        </DirectionsList>
        <Para1>Pick the Colors</Para1>
        <ColorsContainer>
          <ColorContainer>
            <HexCode>{firstHexCode}</HexCode>
            <Input
              value={firstHexCode}
              type="color"
              onChange={event => setFirstHexCode(event.target.value)}
            />
          </ColorContainer>
          <ColorContainer>
            <HexCode>{secondHexCode}</HexCode>
            <Input
              value={secondHexCode}
              type="color"
              onChange={event => setSecondHexCode(event.target.value)}
            />
          </ColorContainer>
        </ColorsContainer>
        <Button onClick={generateButton} type="submit">
          Generate
        </Button>
      </ResponsiveContainer>
    </Container>
  )
}

export default GradientGenerator
