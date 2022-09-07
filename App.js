import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";

const App = () => {
  return (
    <SafeAreaProvider>
    <Navigation />
    </SafeAreaProvider>
    

  )
}


export default App