import React, {useState} from 'react'
import styled from 'styled-components/native'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import {Overlay} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

const WrapHeader = styled.View`
  flex-direction: row;
  align-items: center;
`
const WrapSearchIcon = styled.View`
  flex: 0.12;
  align-items: flex-end;
  justify-content: center;
`

const WrapTextInput = styled.View`
  flex: 0.76;
  justify-content: center;
  padding-left: 5;
`

const WrapCloseIcon = styled.TouchableOpacity`
  flex: 0.12;
  align-items: center;
  justify-content: center;
`

const WrapContent = styled.View`
  padding: 15px;
`

const SearchModal = ({search, visible, setSearch, onCancle}) => {
  return (
    <View>
      <Overlay isVisible={visible} overlayStyle={{padding: 0}} fullScreen>
        <WrapHeader>
          <WrapSearchIcon>
            <Icon name={'ios-search'} size={30} />
          </WrapSearchIcon>
          <WrapTextInput>
            <TextInput
              value={search}
              onChangeText={value => setSearch(value)}
              onFocus={() => console.log('Focus')}
              autoFocus
            />
          </WrapTextInput>
          <WrapCloseIcon onPress={onCancle}>
            <Icon name={'ios-close'} size={30} />
          </WrapCloseIcon>
        </WrapHeader>
        <WrapContent>
          {search ? <Text>Search for {`"${search}"`}</Text> : null}
        </WrapContent>
      </Overlay>
    </View>
  )
}

export default SearchModal
