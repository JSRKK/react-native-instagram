import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import {Home, SearchAndExplore, Story, Activity, Profile} from 'screens'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="ios-home" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Search"
      component={SearchAndExplore}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="ios-search" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Story"
      component={Story}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="ios-add" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Activity"
      component={Activity}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="ios-heart" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="ios-person" color={color} size={size} />
        ),
      }}
    />
  </BottomTab.Navigator>
)

export default BottomTabNavigator
