import { Dimensions, StyleSheet } from 'react-native';
import { colors, height, width } from '../../globals/Useful';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 14,
    elevation: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerPass: {
    justifyContent: 'center',
  },

  bar: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 28,
    top: -15,
    width: '100%',
  },

  passStrength: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 48,
    right: '18%',
  },

  eye: {
    position: 'absolute',
    right: 40,
    paddingTop: 2,
  },

  form: {
    position: 'absolute',
    justifyContent: 'center',
    top: '5%',
    gap: 18,
    //transform: [{ translateY: -50 }],
    height: height / 3.8,
    width: width,
  },

  navIconRegister: {
    position: 'absolute',
    top: '-2%',
    flex: 1,
  },
});

export default styles;
