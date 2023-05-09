import { StyleSheet } from 'react-native';
import colors from '../../Globals/Colors';
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

  customNav: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 230,
    borderColor: colors.middleTransBlack,
    borderWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  customNavButtom: {
    position: 'relative',
    backgroundColor: colors.originalBlack,
    width: 226,
    height: 226,
    borderRadius: 230,
    borderColor: colors.specialGold,
    borderWidth: 1,
  },

  navIconBack: {
    position: 'absolute',
    top: '-4%',
    left: 0,
    flex: 1,
  },

  navIconRefresh: {
    position: 'absolute',
    top: '-22%',
    flex: 1,
  },

  navIconClose: {
    position: 'absolute',
    top: '-4%',
    right: 0,
    flex: 1,
  },

  navIconRegister: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
  },

  navIconList: {
    position: 'absolute',
    bottom: '-20%',
    flex: 1,
  },

  navIconLogin: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flex: 1,
  },
});

export default styles;
