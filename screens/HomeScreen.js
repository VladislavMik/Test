import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Text>Hello</Text>
      <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}


export default HomeScreen