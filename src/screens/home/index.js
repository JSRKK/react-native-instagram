import React, {useContext} from 'react'
import {View} from 'react-native'
import {Text, Button} from 'react-native-elements'
import {DispatchContext} from 'src/context'
import {logoutRequest} from 'src/actions/user'

const Home = ({navigation}) => {
  const dispatch = useContext(DispatchContext)

  const logout = () => {
    dispatch(
      logoutRequest({callback: () => navigation.navigate('Authentication')}),
    )
  }

  return (
    <View>
      <Text>Home</Text>
      <View>
        <Button title={'Logout'} onPress={logout} />
      </View>
    </View>
  )
}

export default Home
