import React from 'react'
import styled from 'styled-components/native'

const TooltipCustom = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1c1f24;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  padding: 7px;
  z-index: 1;
  transform: translateX(-30px);
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
  border-bottom-color: #1c1f24;
  transform: translateY(-10px);
`

const Title = styled.Text`
  color: #ffffff;
`

const Tooltip = ({title, position}) => {
  return (
    <TooltipCustom style={{top: position.y, left: position.x}}>
      <Arrow />
      <Title>{title}</Title>
    </TooltipCustom>
  )
}

export default Tooltip
