import { StyleSheet } from 'react-native';
import { colors } from '../../globals';

const styles = StyleSheet.create({
  customNav: {
    position: 'absolute',
    width: 326,
    height: 326,
    borderRadius: 230,
    borderColor: colors.middleTransBlack,
    borderWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '-18%',
  },

  customNavButtom: {
    position: 'absolute',
    width: 216,
    height: 216,
    borderRadius: 230,
    borderColor: '#dfc691',
    borderWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.specialTranslucid,
  },
  reversePosition: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 216,
    height: 216,
    top: -60,
    borderRadius: 200,
    elevation: 300,
  },
  reverseTextPage: {
    position: 'relative',
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 216,
    height: 216,
    top: '-10%',
    borderRadius: 200,
  },

  navIconBack: {
    position: 'absolute',
    top: '-22%',
    flex: 1,
  },

  navIconClose: {
    position: 'absolute',
    top: '32%',
    flex: 1,
  },
});

export default styles;
