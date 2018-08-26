import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoadingScreen from './components/LoadingScreen';
import ZipCode from './components/ZipCode/ZipCode';

const App = createStackNavigator({
  ZipCode: { screen: ZipCode },
  Loading: { screen: LoadingScreen },
  
});

export default App;
