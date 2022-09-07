import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
            </NavigationContainer>
    )
}

export default Navigation