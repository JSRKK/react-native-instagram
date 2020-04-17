import React from 'react'
import {View} from 'react-native'

const Header = ({children}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#ffffff',
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
      }}>
      {children}
    </View>
  )
}

export default Header
