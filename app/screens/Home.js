import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';

import Container from '../components/Container';

class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <View>
          <Text>Test</Text>
          <Button
            title="Go to Loading screen"
            onPress={() =>
              navigate('Loading', { zipcode: '91780' })
            }
          />
        </View>
      </Container>
    );
  }
}

export default Home;