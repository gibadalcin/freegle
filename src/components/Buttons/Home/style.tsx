import { StyleSheet } from 'react-native';
import { colors, size } from '../../../globals/Useful';
import { transformer } from '../../../../metro.config';
const styles = StyleSheet.create({
  buttonModel: {
    position: 'absolute',
    width: 160,
    height: '46.4%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    elevation: 200,
    top: 5,
  },
  buttonPlate: {
    position: 'absolute',
    width: 160,
    height: '46.4%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    bottom: 5,
    elevation: 200,
  },
  textButtons: {
    color: colors.lightTransWhite,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: size.s1Font,
    marginHorizontal: 14,
    borderRadius: 20,
    letterSpacing: 1,
    textShadowColor: colors.originalBlack,
    textShadowOffset: {
      width: 1,
      height: 1.8,
    },
    shadowOpacity: 0.17,
    textShadowRadius: 3.05,
  },

  logoutButton: {
    position: 'relative',
    width: '44%',
    height: '50%',
    borderRadius: 10,
    backgroundColor: colors.specialRed,
    borderColor: colors.specialGold,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    position: 'relative',
    width: '44%',
    height: '50%',
    borderRadius: 10,
    backgroundColor: colors.originalBlack,
    borderColor: colors.specialGold,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogout: {
    position: 'absolute',
    color: colors.originalWhite,
    fontSize: size.s1Font,
    textShadowColor: colors.originalBlack,
    textShadowOffset: {
      width: 1,
      height: 1.8,
    },
    shadowOpacity: 0.17,
    textShadowRadius: 3.05,
  },
});

export default styles;
