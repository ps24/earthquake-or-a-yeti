import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }  

  static navigationOptions = {
    title: 'Loading...',
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO NAME');
    const style = navigation.getParam('style', 'NO STYLE');
    return (
      <View style={style}>
        <Text>Checking nearby faults and known monster sightings, {name}...</Text>
        <ImageBackground
            source={require('./images/radar.png')}
            style={{
              alignSelf: 'center',
              height: '70%',
              width: '70%'
            }}
            resizeMode="contain"
          >
            <Image
              style={{
                alignSelf: 'center',
                height: '80%',
                width: '80%'
              }}
              resizeMode="contain"
              source={require('./images/Ripple-1.5s-200px.gif')}
            />
          </ImageBackground>
      </View>
    );
  }
}

export default LoadingScreen;