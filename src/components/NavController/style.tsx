import { StyleSheet } from 'react-native';
import { colors, size } from '../../globals/Useful';
const styles = StyleSheet.create({
  textLogout: {
    position: 'absolute',
    color: colors.originalWhite,
    fontSize: 18,
    width: '80%',
    top: '26%',
    textAlign: 'center',
    textShadowColor: colors.originalBlack,
    textShadowOffset: {
      width: 1,
      height: 1.8,
    },
    shadowOpacity: 0.17,
    textShadowRadius: 3.05,
  },

  customNav: {
    position: 'absolute',
    borderRadius: 230,
    borderColor: colors.middleTransBlack,
    borderWidth: 40,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: colors.originalBlack,
  },

  customNavButtomBg: {
    position: 'absolute',
    backgroundColor: colors.originalBlack,
    borderRadius: 230,
    borderColor: colors.specialGold,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    elevation: 300,
  },

  customNavButtom: {
    position: 'absolute',
    backgroundColor: colors.originalBlack,
    borderRadius: 230,
    borderColor: colors.specialGold,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    elevation: 300,
  },

  messageStatus: {
    position: 'relative',
    color: colors.lightTransWhite,
    textAlign: 'center',
    fontSize: size.sFont,
    paddingHorizontal: 12,
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
