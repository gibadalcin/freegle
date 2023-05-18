import { StyleSheet } from 'react-native';
import { colors } from '../../globals';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.middleTransBlack,
    borderColor: colors.specialGold,
    borderWidth: 1,
    shadow: 20,
    elevation: 300,
  },

  dataField: {
    flex: 0.8,
    width: '100%',
    height: '80%',
    position: 'absolute',
    justifyContent: 'center',
    paddingVertical: 22,
    paddingHorizontal: 22,
  },
  dataBigTextBrand: {
    position: 'relative',
    fontSize: 54,
    minHeight: 40,
    textAlign: 'left',
    color: colors.originalWhite,
  },
  dataSmallTextModel: {
    position: 'relative',
    width: '90%',
    minHeight: 40,
    fontSize: 28,
    textAlign: 'left',
    color: colors.originalWhite,
    top: -8,
  },

  dataBigTextYear: {
    position: 'relative',
    width: '100%',
    fontSize: 84,
    minHeight: 40,
    textAlign: 'center',
    color: colors.originalWhite,
    flex: 0.4,
    marginTop: '32%',
  },

  priceField: {
    flex: 0.2,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '130%',
  },
  dataSmallTextRef: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.originalWhite,
    marginBottom: 10,
  },
  priceText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: '700',
    color: colors.specialGold,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: colors.specialRed,
  },

  shadowProps: {
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

  navIconSave: {
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
