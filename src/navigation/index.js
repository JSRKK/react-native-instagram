import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Authentication, Register, Login, AddStory} from 'screens'
import BottomTabNavigator from './bottom-tab'

const Stack = createStackNavigator()

const StackNavigator = () => (
  <Stack.Navigator
    headerMode="none"
    cardStyle={{backgroundColor: '#FFFFFF'}}
    initialRouteName="Home">
    <Stack.Screen name="Authentication" component={Authentication} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={BottomTabNavigator} />
    <Stack.Screen name="AddStory" component={AddStory} />
  </Stack.Navigator>
)

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigationContainer
