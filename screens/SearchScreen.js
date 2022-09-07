import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import ReciepsScreen from "./ReciepsScreen";
import GamesScreen from "./GamesScreen";
import VideosScreen from "./VideosScreen";


const Top = createMaterialTopTabNavigator()

const SearchScreen = () => {
  return (
    <Top.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 12, marginTop: 50 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}>
        <Top.Screen name='Recieps' component={ReciepsScreen} />
        <Top.Screen name='Games' component={GamesScreen} />
        <Top.Screen name='Videos' component={VideosScreen} />
    </Top.Navigator>
  )
}


export default SearchScreen