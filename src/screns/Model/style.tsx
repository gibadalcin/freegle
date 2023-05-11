import { StyleSheet } from 'react-native';
import { colors } from '../../globals';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  selectContainer: {
    flex: 0.6,
    justifyContent: 'flex-end',
    rowGap: 30,
    paddingHorizontal: 14,
    marginTop: '36%',
  },

  selectFields: {
    justifyContent: 'flex-end',
    rowGap: 30,
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

  navIconLogin: {
    position: 'absolute',
    top: '-2%',
    flex: 1,
  },

  navIconClose: {
    position: 'absolute',
    top: '38%',
    flex: 1,
  },
});

export default styles;
