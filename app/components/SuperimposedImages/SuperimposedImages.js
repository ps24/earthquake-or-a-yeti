import React from 'react';
import { Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const SuperimposedImages = ({backgroundImg, topImg}) => (
  <ImageBackground
    source={backgroundImg}
    style={styles.background}
    resizeMode='contain'
  >
    <Image
      source={topImg}
      style={styles.top}
      resizeMode='contain'
    />
  </ImageBackground>
);

SuperimposedImages.propTypes = {
  backgroundImg: PropTypes.number,
  topImg: PropTypes.number,
};

export default SuperimposedImages;
