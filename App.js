import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import LoadingScreen from './components/LoadingScreen';
import EntryScreen from './components/Entry';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Loading: { screen: LoadingScreen },
  Entry: { screen: EntryScreen},
});

export default App;
