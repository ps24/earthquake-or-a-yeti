import React from 'react';
import { Button, Image, StatusBar, Text, View } from 'react-native';

import styles from './monsterStyles';
import monsters from '../Monsters';

class Monster extends React.Component {
  static navigationOptions = {
    title: 'Twas A Monster',
  };
  constructor(props) {
    super(props);
    this.returnToMain = this.returnToMain.bind(this);
  }

  returnToMain() {
    const { navigate } = this.props.navigation;
    navigate('ZipCode');
  }

  render() {
    const { navigation } = this.props;
    const monsterIndex = navigation.getParam('monsterIndex', 0);
    const { monster, image } = monsters[monsterIndex];
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle="light-content" />
        <View style={styles.mainContainer}>
          <Text style={styles.text}>It was probably a</Text>
          <Text style={styles.text}>{monster.toUpperCase()}</Text>
          <Image
            resizeMode="contain"
            source={image} />
          <Button
            style={styles.button}
            onPress={this.returnToMain}
            title="Return to Search"
          />
        </View>
      </View>
    );
  }
}

export default Monster;