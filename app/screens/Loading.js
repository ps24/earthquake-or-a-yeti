import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import Container from '../components/Container';
import SuperimposedImages from '../components/SuperimposedImages';

const loadingBackground = require('./images/radar_200.png');
const loadingTopImage = require('./images/ripple_200.gif');

class Loading extends React.Component {
  static navigationOptions = {
    title: 'Loading...',
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO NAME');
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <View>
          <Text>Checking nearby faults and known monster sightings, {name}...</Text>
          <SuperimposedImages backgroundImg={loadingBackground} topImg={loadingTopImage} />
        </View>
      </Container>
    );
  }
}

export default Loading;