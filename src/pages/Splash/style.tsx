import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8d0a22',
  },

  splashField: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  splashImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    top: '36%',
  },

  splashCompany: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: '6%',
  },
});

export default styles;
