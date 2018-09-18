import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor',
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '$textColor',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '900',
  },
  button: {
    color: '#FFFFFF',
    fontWeight: '700',
  }
});

export default styles;