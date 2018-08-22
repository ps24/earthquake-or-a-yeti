import React from 'react';
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native';

import containerStyles from '../components/Container/styles';
import superimposedImageStyles from '../components/SuperimposedImages/styles';

class Loading extends React.Component {
  static navigationOptions = {
    title: 'Loading...',
  };
  constructor(props) {
    super(props);
    this.state = {
      loadingBackground: require('./images/radar_200.png'),
      loadingTopImage: require('./images/ripple_200.gif')
    };
  }
  render() {
    const { navigation } = this.props;
    const { loadingBackground, loadingTopImage } = this.state;
    const zipcode = navigation.getParam('zipcode', 'NO ZIPCODE');
    return (
      <View style={[containerStyles.view, containerStyles.containerColor]}>
        <StatusBar translucent={false} barStyle="light-content" />
        <View>
          <Text style={containerStyles.text}>Checking nearby faults and known monster sightings around {zipcode}...</Text>
          <ImageBackground
            source={loadingBackground}
            style={superimposedImageStyles.background}
            resizeMode='contain'
          >
            <Image
              source={loadingTopImage}
              style={superimposedImageStyles.top}
              resizeMode='contain'
            />
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default Loading;