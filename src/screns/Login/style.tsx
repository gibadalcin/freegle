import { StyleSheet } from 'react-native';
import { colors } from '../../globals';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignContent: 'space-between',
    rowGap: 20,
    elevation: 300,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgIntensity: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flex: 1,
    right: 0,
  },

  attention: {
    position: 'absolute',
    top: '13%',
    left: 8,
    marginHorizontal: 16,
    padding: 10,
    paddingBottom: 11,
    borderRadius: 50,
    opacity: 0.9,
  },

  replyStatus: {
    position: 'absolute',
    textAlignVertical: 'center',
    alignItems: 'center',
    color: colors.originalWhite,
    marginHorizontal: 14,
    textAlign: 'center',
    width: '100%',
    height: 90,
    top: '12%',
    fontSize: 20,
    elevation: 300,
    borderRadius: 10,
    paddingLeft: 22,
    paddingRight: 22,
    fontWeight: '300',
    lineHeight: 22,
  },

  replyTextStatus: {
    position: 'absolute',
    width: '88%',
    height: 90,
    textAlignVertical: 'center',
    color: colors.originalWhite,
    textAlign: 'center',
    fontSize: 20,
    elevation: 300,
    paddingVertical: 12,
    paddingHorizontal: 4,
    fontWeight: '300',
    lineHeight: 22,
  },

  containerPass: {
    justifyContent: 'center',
  },

  eye: {
    position: 'absolute',
    right: 18,
    paddingTop: 2,
  },

  form: {
    position: 'absolute',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    top: '34%',
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
    top: '32%',
    flex: 1,
  },
});

export default styles;
