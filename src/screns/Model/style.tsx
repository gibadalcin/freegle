import { StyleSheet } from 'react-native';
import { colors } from '../../globals';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  selectContainer: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 18,
    paddingHorizontal: 14,
  },

  selectFields: {
    justifyContent: 'center',
    rowGap: 28,
    borderRadius: 4,
    height: 54,
    fontSize: 18,
  },

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
    borderColor: colors.specialGold,
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
    fontSize: 18,
    color: colors.originalWhite,
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

  navIconLogin: {
    position: 'absolute',
    top: '-2%',
    flex: 1,
  },

  navIconClose: {
    position: 'absolute',
    top: '32%',
    flex: 1,
  },
});

export default styles;
