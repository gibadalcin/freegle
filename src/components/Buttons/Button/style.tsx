import { StyleSheet } from 'react-native';
import { colors } from '../../../globals/Useful';
const styles = StyleSheet.create({
  button: {
    elevation: 40,
    borderColor: colors.specialGold,
    borderWidth: 1,
    backgroundColor: colors.specialRed,
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 1.5,
    textAlign: 'center',
    textAlignVertical: 'center',
    elevation: 1,
    paddingVertical: '2%',
  },
});

export default styles;
