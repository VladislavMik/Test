
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/navigation";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";


import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

const store = createStore(authReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaProvider>
        <Provider store={store}>
         <Navigation />
        </Provider>
     </SafeAreaProvider>
    </NavigationContainer>
  )
}


export default App