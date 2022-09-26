

import React from "react";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SearchScreen from "../screens/SearchScreen";
import PlayScreen from "../screens/PlayScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/ProfileScreen";
import HomeScreen from '../screens/HomeScreen'


const BotNavigation = () => {
  const Bot = createMaterialBottomTabNavigator()

  return (
    <Bot.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
    >
      <Bot.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />)
        }}
      />
      <Bot.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tune" color={color} size={26} />)
        }}
      />
      <Bot.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={26} />)
        }}
      />
      <Bot.Screen
        name="Play"
        component={PlayScreen}
        options={{
          tabBarLabel: 'Play',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="play-circle" color={color} size={26} />)
        }}
      />
    </Bot.Navigator>
  )
}
// const Drawer = createDrawerNavigator()
// const DrawerNavigation = () => {
  
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name='Profile' component={Profile} />
//     </Drawer.Navigator>
//   )
// }



const Navigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="BotNavigation" component={BotNavigation} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default Navigation


