import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import _ from 'lodash'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native'
import {Overlay} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../header'
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
  const [taged, setTaged] = useState(false)
  const [tooltip, setTooltip] = useState({})
  const [layout, setLayout] = useState({})

  const handleOnSelect = data => {
    if (!_.isEmpty(tooltip)) {
      setPeoples([...peoples, {...data, tooltip}])
      clearState()
    }
  }

  const clearState = () => {
    setTooltip({})
    setTaged(false)
  }

  const handleOnRemove = data => {
    let newPeoples = _.cloneDeep(peoples)
    const index = newPeoples.findIndex(people => people.id === data.id)
    if (index > -1) {
      newPeoples.splice(index, 1)
      setPeoples(newPeoples)
    }
  }

  const handleOnChangedPosition = (data, position) => {
    let newPeoples = _.cloneDeep(peoples)
    const index = newPeoples.findIndex(people => people.id === data.id)
    if (index > -1) {
      newPeoples[index].tooltip = position
      setPeoples(newPeoples)
    }
  }

  return (
    <Overlay isVisible={isVisible} overlayStyle={{padding: 0}} fullScreen>
      <KeyboardAvoidingView
        behavior={'height'}
        style={{flexGrow: 1, height: Dimensions.get('screen').height - 30}}
        enabled={false}>
        <View>
          {taged ? (
            <Search onSelect={handleOnSelect} />
          ) : (
            <Header style={{background: 'tranparent'}}>
              <WrapCloseButton>
                <TouchableOpacity
                  onPress={() => {
                    setPeoples([])
                    clearState()
                    onClose()
                  }}>
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
        </View>
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
            onLayout={e => setLayout(e.nativeEvent.layout)}
            onStartShouldSetResponder={() => true}
            onResponderStart={e => {
              e.stopPropagation()
              const x = parseFloat(e.nativeEvent.locationX, 2)
              const y = parseFloat(e.nativeEvent.locationY, 2)

              setTooltip({x, y})
              setTaged(prevState => !prevState)
            }}>
            {taged && !_.isEmpty(tooltip) ? (
              <Tooltip
                position={{x: tooltip.x, y: tooltip.y}}
                title={`Who's this?`}
                parentLayout={layout}
                moveable={true}
              />
            ) : null}
            {!_.isEmpty(peoples)
              ? peoples.map((data, index) => (
                  <Tooltip
                    key={index}
                    position={{x: data.tooltip.x, y: data.tooltip.y}}
                    title={`${data.fullName}`}
                    onRemove={() => handleOnRemove(data)}
                    onChangedPosition={position =>
                      handleOnChangedPosition(data, position)
                    }
                    parentLayout={layout}
                    removeble={true}
                    moveable={true}
                  />
                ))
              : null}
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
      </KeyboardAvoidingView>
    </Overlay>
  )
}

TagPeople.protoType = {
  isVisible: PropTypes.bool,
  photoUri: PropTypes.string
}

TagPeople.defaultProps = {
  isVisible: false,
  photo: ''
}

export default TagPeople
