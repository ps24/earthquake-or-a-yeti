import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation';

import Loading from './components/Loading';

EStyleSheet.build({
  $primaryBlue: '#ADD8E6',
});

const App = createStackNavigator({
  Loading: Loading,
});

export default App;