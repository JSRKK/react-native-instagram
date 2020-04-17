import React, {useState, useEffect} from 'react'
import _ from 'lodash'

import {View} from 'react-native'
import {Overlay} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import Header from './header'
import Footer from './footer'

const Story = () => {
  const [visible, setVisible] = useState(true)
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      e.preventDefault()
      setVisible(true)
    })

    return unsubscribe
  }, [navigation])

  return (
    <View>
      <Overlay isVisible={visible} fullScreen overlayStyle={{padding: 0}}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <Header setVisible={setVisible} />
          <Footer />
        </View>
      </Overlay>
    </View>
  )
}

export default Story
