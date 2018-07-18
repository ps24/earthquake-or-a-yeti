import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import LoadingScreen from './components/LoadingScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Loading: { screen: LoadingScreen },
});

export default App;
