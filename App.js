import { View, Text,} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Camera from './component/Camera'
import Lenses from './component/Lenses'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const App = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name='Camera' component={Camera} options={{
          tabBarBadge: 5,
        }}/>
        <Tab.Screen name='Lenses' component={Lenses}/>
    </Tab.Navigator>
     
    </NavigationContainer>
  )
}

export default App