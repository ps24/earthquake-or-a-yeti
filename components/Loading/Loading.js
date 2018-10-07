import React from 'react';
import { Image, ImageBackground, StatusBar, Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';

import loadingStyles from './loadingStyles';
import EarthquakeFound from '../EarthquakeFound/EarthquakeFound';

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
  handleCheckPress = () => {
    const { navigate } = this.props.navigation;
    navigate('EarthquakeFound', { Loading: this.state.Loading });
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

        <TouchableOpacity style = { styles.buttonContainer }>
                    <Button 
                        title = 'NEXT PAGE'
                        style={ styles.buttonText } onPress={this.handleCheckPress} /> 
        </TouchableOpacity>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
      backgroundColor: '#ecf0f1',
      paddingVertical: 15, /* height of the 'CHECK' box */
      borderRadius: 12
  },
  buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
  }
});

export default Loading;