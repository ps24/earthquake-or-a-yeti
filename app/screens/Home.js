import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import Container from '../components/Container';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <View>
      <Text>Test</Text>
    </View>
  </Container>
);