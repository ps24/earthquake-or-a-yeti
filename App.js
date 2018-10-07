import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation';
import ZipCode from './components/ZipCode/ZipCode';
import Loading from './components/Loading/Loading';
import EarthquakeFound from './components/EarthquakeFound/EarthquakeFound';



EStyleSheet.build({
  $backgroundColor: '#34495e',
  $textColor: '#3498db'
});

const App = createStackNavigator({
  ZipCode: { screen: ZipCode },
  Loading: { screen: Loading },  
  EarthquakeFound: { screen: EarthquakeFound },
  ZipCode: { screen: ZipCode },
});

export default App;