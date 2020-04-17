import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import _ from 'lodash'

import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native'
import {Overlay} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {Header} from 'src/components'
import {DEFAULT_PHOTO} from 'src/constants/image'
import Tooltip from './tooltip'
import Search from './search'

const WrapCloseButton = styled.View`
  flex: 0.15;
  padding-left: 15px;
`

const WrapTitle = styled.View`
  flex: 0.75;
`

const WrapIcon = styled.View`
  flex: 0.1;
  padding: 5px;
`

const Title = styled.Text`
  font-size: 18px;
`

const WrapTooltip = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
`

const WrapPersonIcon = styled.View`
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 24px;
  height: 24px;
  background-color: #3c3c3c;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
`

const TagPeople = ({isVisible, photo, onClose}) => {
  const [peoples, setPeoples] = useState([])
  const [taged, setTaged] = useState()
  const [tooltip, setTooltip] = useState({x: 0, y: 0})
  const wrapTooltipRef = useRef()

  return (
    <View>
      <Overlay isVisible={isVisible} fullScreen overlayStyle={{padding: 0}}>
        {taged ? (
          <Search />
        ) : (
          <Header>
            <WrapCloseButton>
              <TouchableOpacity onPress={onClose}>
                <Icon name={'ios-close'} size={50} color={'gray'} />
              </TouchableOpacity>
            </WrapCloseButton>
            <WrapTitle>
              <Title>Tag People</Title>
            </WrapTitle>
            <WrapIcon>
              <TouchableOpacity onPress={() => {}}>
                <Icon name={'ios-checkmark'} size={50} color={'#5b94e2'} />
              </TouchableOpacity>
            </WrapIcon>
          </Header>
        )}
        <View style={{flex: 0.5}}>
          <Image
            source={!_.isEmpty(photo) ? {uri: photo} : DEFAULT_PHOTO}
            style={{width: '100%', height: '100%'}}
          />
          {!_.isEmpty(peoples) ? (
            <WrapPersonIcon>
              <Icon name={'ios-person'} size={18} color={'#ffffff'} />
            </WrapPersonIcon>
          ) : null}
          <WrapTooltip
            onLayout={event => {
              wrapTooltipRef.current = event.nativeEvent.layout
            }}
            onTouchStart={e => {
              const {width, height} = wrapTooltipRef.current
              let {locationX, locationY} = e.nativeEvent

              if (locationX - 30 < 0) {
                locationX += 30 - locationX
              }
              if (locationX + 50 > width) {
                locationX -= locationX + 60 - width
              }
              if (locationY + 35 > height) {
                locationY -= locationY + 35 - height
              }
              setTaged(prevState => !prevState)
              setTooltip({x: locationX, y: locationY})
            }}>
            {taged ? (
              <Tooltip
                position={{x: tooltip.x, y: tooltip.y}}
                title={`Who's this?`}
              />
            ) : null}
          </WrapTooltip>
        </View>
        <View
          style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          {_.isEmpty(peoples) ? (
            <Text>Tap photo to tag people.</Text>
          ) : (
            <>
              <Text>Tap photo to tag people</Text>
              <Text>Drag to move, or tap to delete.</Text>
            </>
          )}
        </View>
      </Overlay>
    </View>
  )
}

TagPeople.protoType = {
  isVisible: PropTypes.bool,
  photoUri: PropTypes.string,
}

TagPeople.defaultProps = {
  isVisible: false,
  photo: '',
}

export default TagPeople
