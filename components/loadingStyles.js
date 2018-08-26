import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // vertically center
    backgroundColor: '$primaryBlue',
  },
  containerColor: {
    backgroundColor: '$primaryBlue',
  },
  view: {
    flex: 1,
    justifyContent: 'center', // vertically center
  },
  text: {
    textAlign: 'center',
  },
  backgroundImage: {
    alignSelf: 'center',
    width: '60%',
    height: '60%'
  },
  topImage: {
    alignSelf: 'center',
    width: '100%',
    height: '100%'
  }
});