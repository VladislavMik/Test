import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from './navigation/navigation';

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest; // Debugger requests check
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
