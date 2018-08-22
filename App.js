import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation';

import Home from './app/screens/Home';
import Loading from './app/screens/Loading';

EStyleSheet.build({
  $primaryBlue: '#ADD8E6',
});

const App = createStackNavigator({
  Home: Home,
  Loading: Loading,
});

export default App;