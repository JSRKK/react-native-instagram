import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {Header} from 'components'

const HeaderBar = ({setVisible}) => {
  const navigation = useNavigation()
  return (
    <Header>
      <View style={{flex: 0.15, paddingLeft: 15}}>
        <TouchableOpacity
          onPress={() => {
            setVisible(false)
            navigation.navigate('Home')
          }}>
          <Icon name={'ios-close'} size={50} color={'gray'} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.75}}>
        <Text style={{fontSize: 17}}>Gallery</Text>
      </View>
      <View style={{flex: 0.1, padding: 5}}>
        <TouchableOpacity
          onPress={() => {
            setVisible(false)
            navigation.navigate('AddStory')
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </Header>
  )
}

export default HeaderBar
