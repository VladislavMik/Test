
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';




const PlayScreen = () => {

  const Drawer = createDrawerNavigator()
 

  return (
    <Drawer.Navigator>
      
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    flex: 1

    
    
},
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontSize: 15,
    height: '100%',
   
  
    
  },
})


export default PlayScreen