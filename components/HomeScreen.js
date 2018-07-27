import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Entypo} from "@expo/vector-icons"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
  newFont:{
    fontSize: 40,
    textAlign: 'center',
    color: '#FF8C00',
    fontFamily: 'Verdana',
    fontWeight: 'bold', 
  },
});

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <TextInput/>
          <Text style={styles.newFont}>Welcome to the earthquake app! </Text>
        
        <Entypo name="arrow-with-circle-right" size={80} color='#FF8C00'/>

          <Button
            title="Ready to begin!"
            onPress={() =>
              navigate('Entry', {name: 'PS, style: style.container'})
            }
          />
        </View>
      );
    }
  }

  export default HomeScreen;