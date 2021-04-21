import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

import TabBar from '../components/TabBar'

import Home from '../screens/Home'
import Profile from '../screens/Profile'

function MainNav() {
  return (
    <Tab.Navigator tabBar={props => < TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default MainNav