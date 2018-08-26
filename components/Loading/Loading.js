import React from 'react';
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native';

import loadingStyles from './loadingStyles';

class Loading extends React.Component {
  static navigationOptions = {
    title: 'Loading...',
  };
  constructor(props) {
    super(props);
    this.state = {
      loadingBackground: require('../images/radar_200.png'),
      loadingTopImage: require('../images/ripple_200.gif')
    };
  }
  render() {
    const { navigation } = this.props;
    const { loadingBackground, loadingTopImage } = this.state;
    const zipcode = navigation.getParam('zipcodeEntry', 'NO ZIPCODE');
    return (
      <View style={[loadingStyles.view, loadingStyles.containerColor]}>
        <StatusBar translucent={false} barStyle="light-content" />
        <View style={loadingStyles.content}>
          <Text style={loadingStyles.text}>Checking nearby faults and known monster sightings around {zipcode}...</Text>
          <ImageBackground
            source={loadingBackground}
            style={loadingStyles.backgroundImage}
            resizeMode='contain'
          >
            <Image
              source={loadingTopImage}
              style={loadingStyles.topImage}
              resizeMode='contain'
            />
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Loading;