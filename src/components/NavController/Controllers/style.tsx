import { StyleSheet } from 'react-native';
import { colors, size } from '../../../globals/Useful';
const styles = StyleSheet.create({
  navIconBack: {
    position: 'absolute',
    top: '0%',
    left: '-12%',
    padding: 8,
    borderRadius: 100,
  },

  navIconInstructions: {
    position: 'absolute',
    top: '-24%',
    padding: 8,
    borderRadius: 100,
  },

  navIconClose: {
    position: 'absolute',
    top: '-0%',
    right: '-10%',
    padding: 8,
    borderRadius: 100,
  },

  navIconAccount: {
    position: 'absolute',
    bottom: '-2%',
    left: '-10%',
    padding: 8,
    borderRadius: 100,
  },

  navIconList: {
    position: 'absolute',
    bottom: '-24%',
    padding: 8,
    borderRadius: 100,
  },

  navIconLog: {
    position: 'absolute',
    bottom: '-2%',
    right: '-10%',
    padding: 8,
    borderRadius: 100,
  },
});

export default styles;
