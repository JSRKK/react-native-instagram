import React, {useContext} from 'react'
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {DispatchContext} from 'src/context'
import ConnectState from 'src/store/connect-state'

import Header from './header'
import Content from './content'


const AddStory = ({photo}) => {
  const navigation = useNavigation()
  const dispatch = useContext(DispatchContext)

  return (
    <View>
      <Header />
      <Content />
    </View>
  )
}

const AddStoryState = props => (
  <ConnectState
    selectors={[
      {
        name: 'photo',
        path: state => state.story.photo,
      },
    ]}
    props={props}>
    <AddStory />
  </ConnectState>
)

export default AddStoryState
