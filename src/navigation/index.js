import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Authentication, Register, Login, Home} from 'screens'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" cardStyle={{backgroundColor: '#FFFFFF'}}>
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigationContainer
