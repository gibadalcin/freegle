import { StyleSheet } from 'react-native';
import { colors } from '../../globals';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 14,
    elevation: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    position: 'absolute',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
  },

  buttonsLogOut: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 130,
    gap: 12,
  },
  exitButtons: {
    width: 150,
    borderRadius: 10,
  },

  customNav: {
    position: 'absolute',
    width: 326,
    height: 326,
    borderRadius: 230,
    borderColor: colors.middleTransBlack,
    borderWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  customNavButtom: {
    position: 'relative',
    backgroundColor: colors.originalBlack,
    width: 216,
    height: 216,
    borderRadius: 230,
    borderColor: colors.specialGold,
    borderWidth: 1,
  },

  textLogout: {
    position: 'absolute',
    color: colors.originalWhite,
    fontSize: 18,
    top: '34%',
  },

  navIconBack: {
    position: 'absolute',
    top: '0%',
    left: '-1%',
    flex: 1,
  },

  navIconInstructions: {
    position: 'absolute',
    top: '-18%',
    flex: 1,
  },

  navIconClose: {
    position: 'absolute',
    top: '-0%',
    right: '-1%',
    flex: 1,
  },

  navIconAccount: {
    position: 'absolute',
    bottom: '-2%',
    left: 0,
    flex: 1,
  },

  navIconList: {
    position: 'absolute',
    bottom: '-18%',
    flex: 1,
  },

  navIconLog: {
    position: 'absolute',
    bottom: '-2%',
    right: '2%',
    flex: 1,
  },
});

export default styles;
