import React from 'react'
import styled from 'styled-components'

import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {Header} from 'components'

const WrapBackButton = styled(View)`
  flex: 0.15;
  padding-left: 15px;
`

const WrapTitle = styled(View)`
  flex: 0.7;
`

const WrapShareButton = styled(View)`
  flex: 0.15;
  padding: 5px;
`

const Title = styled(Text)`
  font-weight: bold;
`

const Share = styled(Text)`
  color: #5b94e2;
  font-weight: bold;
`

const HeaderBar = () => {
  const navigation = useNavigation()

  return (
    <Header>
      <WrapBackButton>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Story')
          }}>
          <Icon name={'ios-arrow-round-back'} size={50} color={'gray'} />
        </TouchableOpacity>
      </WrapBackButton>
      <WrapTitle>
        <Title>New Post</Title>
      </WrapTitle>
      <WrapShareButton>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home')
          }}>
          <Share>Share</Share>
        </TouchableOpacity>
      </WrapShareButton>
    </Header>
  )
}

export default HeaderBar
