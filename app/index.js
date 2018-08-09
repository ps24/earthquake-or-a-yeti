import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Loading from './screens/Loading';

EStyleSheet.build({
  $primaryBlue: '#ADD8E6',
});

export default createStackNavigator({
  Home: Home,
  Loading: Loading,
});