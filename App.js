import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/navigation";


const App = () => {
  return ( 
  <NavigationContainer>
  
  <SafeAreaProvider>
   
    
    <Navigation />
    </SafeAreaProvider>
    </NavigationContainer>
  )
}


export default App