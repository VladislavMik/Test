
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PlayScreen = () => {


 

  return (
    <View style={styles.header}>
      <View style={styles.headerText}> 
        <Text >Play</Text>
      </View>


    </View>
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