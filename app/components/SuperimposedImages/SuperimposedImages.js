import React from 'react';
import { Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class SuperimposedImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImg: props.backgroundImg,
      topImg: props.topImg
    };
  }
  render() {
    const { backgroundImg, topImg } = this.state;
    console.log('images', this.state);

    return (
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
    )
  }
}

SuperimposedImages.propTypes = {
  backgroundImg: PropTypes.number,
  topImg: PropTypes.number,
};

export default SuperimposedImages;
