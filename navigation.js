import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import PlayScreen from "./screens/PlayScreen";

const Bot = createMaterialBottomTabNavigator()


const Navigation = () => {
  return (

    <NavigationContainer>
      <Bot.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"

      >
        <Bot.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />)
          }}

        />
        <Bot.Screen
          name="Settings"
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
    </NavigationContainer>
  )
}

export default Navigation