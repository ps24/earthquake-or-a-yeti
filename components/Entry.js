import React from 'react';

import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"


class App extends React.Component {
  static navigationOptions = {
    title: 'User Entry',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
        <Text style={styles.boxOneText}>
          Enter Zipcode
          </Text>
          <TextInput
            style={{alignItems: 'center', height: 45}}
            placeholder="Type zipcode here!"
            onChangeText={(text) => this.setState({text})}
        />
        </View>
        
        <View style={[styles.boxContainer, styles.boxTwo]}>
        <Text style={styles.boxTwoText}>Was that an Earthquake or a ________ </Text>
        <FontAwesome name="question-circle" size={80} color='#FF8C00'/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    flexDirection: 'column',
  },
  boxContainer: {
    flex: 1, // 1:3
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOneText:{
    fontSize: 20,
    color: '#FF8C00',
    fontWeight: 'bold',
    fontFamily: 'Verdana'
  },
  boxOne:{
    flex: 2, // 3:6
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTwoText:{
    fontSize: 40,
    color: '#FF8C00',
    textAlign:'center',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
  },
  boxTwo:{
    flex: 6, // 1:4
    backgroundColor: '#ddd'
  },
  boxThree: {
    flex: 6, // 2:6
    flexDirection: 'row',
    justifyContent: 'space-between', // main axis
    alignItems: 'flex-end', // cross axis
    backgroundColor: '#CE6D39',
  },
});

export default App;