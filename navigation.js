import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Navigation = () => {
    return (
        <NavigationContainer>
            <HomeScreen />
            <SettingsScreen />
        </NavigationContainer>
    )
}

export default Navigation