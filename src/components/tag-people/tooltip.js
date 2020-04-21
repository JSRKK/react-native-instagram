import React, {useState, useEffect, useRef} from 'react'
import _ from 'lodash'
import styled, {css} from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native'

const HEADER_HEIGHT = 50
const ARROW_SIZE = 10

const TooltipCustom = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(28, 31, 36, 0.9);
  color: #ffffff;
  border-radius: 6px;
  z-index: 1;
  align-items: center;
`

const Arrow = styled.View`
  position: absolute;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 10px;
  border-right-width: 10px;
  border-bottom-width: 10px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: rgba(28, 31, 36, 0.9);
`

const Title = styled.Text`
  color: #ffffff;
`

const WrapRemoveIcon = styled.View`
  position: absolute;
  z-index: 1;
  top: -12px;
  right: -15px;
  width: 25px;
  height: 25px;
  background-color: #c9cbcb;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
`

const RemoveButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Tooltip = ({
  title,
  position,
  onRemove,
  onChangedPosition,
  parentLayout,
  removeble = false,
  moveable = false
}) => {
  const [touched, setTouched] = useState(false)
  const [localPosition, setLocalPosition] = useState({})
  const [layout, setLayout] = useState({})
  const [placement, setPlacement] = useState('top')
  const [arrowPos, setArrowPos] = useState({x: 0, y: -10})
  const arrowRef = useRef()

  useEffect(() => {
    if (!_.isEqual(localPosition, position)) {
      const {x: px, y: py, width: pw, height: ph} = parentLayout
      const {width = 90, height = 40} = layout
      const half = width / 2
      let {x, y} = position
      let newArrowPos = {...arrowPos}
      newArrowPos.x = half

      if (x + width > pw) {
        const right = x + width - pw
        x -= right

        newArrowPos.x =
          half - ARROW_SIZE + right > width
            ? width - ARROW_SIZE - 4
            : half - ARROW_SIZE + right
      } else if (x - half < px) {
        const left = half - x
        x = 0
        newArrowPos.x = left < px ? px : left
      } else {
        x -= half
      }

      if (y + height > ph) {
        y -= y + height - ph
      }

      newArrowPos.x = parseInt(newArrowPos.x - ARROW_SIZE)
      setArrowPos(newArrowPos)
      setLocalPosition({x, y})
    }
  }, [position])

  const currentPosition = e => {
    const {x: px, y: py, width: pw, height: ph} = parentLayout
    const {width, height} = layout
    let newArrowPos = {...arrowPos}
    const half = width / 2
    let {pageX, pageY} = e.nativeEvent

    // pageX -= half
    // pageY -= HEADER_HEIGHT
    // pageX = pageX > pw - width ? pw - width : pageX
    // pageY = pageY > ph - height ? ph - height : pageY - ARROW_SIZE
    // pageX = pageX < px ? px : pageX
    // pageY = pageY < py + ARROW_SIZE ? py + ARROW_SIZE : pageY - ARROW_SIZE

    if (pageX + width > pw) {
      const right = pageX + width - pw
      pageX -= right

      newArrowPos.x =
        newArrowPos.x + right > width
          ? width - ARROW_SIZE - 4
          : newArrowPos.x + right - ARROW_SIZE
    } else if (pageX - half < px) {
      const left = half - x
      pageX = 0
      newArrowPos.x = left < px ? px : left
    } else {
      if (newArrowPos.x > parseInt(half - ARROW_SIZE)) {
        newArrowPos.x -= 1
      } else if (newArrowPos.x < parseInt(half - ARROW_SIZE)) {
        newArrowPos.x += 1
      } else {
        pageX -= half
      }
    }

    if (pageY + height > ph) {
      pageY -= pageY + height - ph
    }

    // setArrowPos(newArrowPos)
    console.log(arrowRef.current)

    const x = parseFloat(pageX, 2)
    const y = parseFloat(pageY, 2)
    // setLocalPosition({x, y})
  }

  const handleOnResponderMove = e => {
    if (!_.isEmpty(parentLayout) && moveable) {
      currentPosition(e)
      if (touched) setTouched(false)
    }
  }

  const handleOnResponderRelease = e => {
    if (!_.isEmpty(parentLayout) && moveable) {
      currentPosition(e)
      if (onChangedPosition) onChangedPosition(localPosition)
    }
  }

  return (
    !_.isEmpty(localPosition) && (
      <TooltipCustom
        style={{top: localPosition.y, left: localPosition.x}}
        onLayout={e => setLayout(e.nativeEvent.layout)}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderMove={handleOnResponderMove}
        onResponderRelease={handleOnResponderRelease}>
        <Arrow ref={arrowRef} style={{top: arrowPos.y, left: arrowPos.x}} />
        <TouchableWithoutFeedback
          onPress={e => {
            setTouched(prevState => !prevState)
          }}>
          <View style={{padding: 10}}>
            <Title>{title}</Title>
          </View>
        </TouchableWithoutFeedback>
        {touched && removeble ? (
          <WrapRemoveIcon>
            <RemoveButton onPress={onRemove}>
              <Icon name={'ios-close'} size={25} onPress={onRemove} />
            </RemoveButton>
          </WrapRemoveIcon>
        ) : null}
      </TooltipCustom>
    )
  )
}

export default Tooltip
