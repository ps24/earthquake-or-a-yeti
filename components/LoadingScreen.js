import React from 'react';
import { Text, View } from 'react-native';

class LoadingScreen extends React.Component {
    static navigationOptions = {
      title: 'Loading',
    };
    render() {
      const { name } = this.props;
      return (
        <View style={this.props.style}>
          <Text>Checking nearby faults and known monster sightings, {name}...</Text>
        </View>
      );
    }
  }

  export default LoadingScreen;