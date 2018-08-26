import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // vertically center
    backgroundColor: '$backgroundColor',
  },
  containerColor: {
    backgroundColor: '$backgroundColor',
  },
  view: {
    flex: 1,
    justifyContent: 'center', // vertically center
  },
  content: {
    padding: 20
  },
  text: {
    textAlign: 'center',
    color: '$textColor',
    fontSize: 30,
    fontWeight: '900',

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