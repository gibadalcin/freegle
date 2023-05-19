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

  bar: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 1,
    top: -9,
    width: '100%',
  },

  passStrength: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 48,
    right: '18%',
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
    top: '24%',
  },

  navIconRegister: {
    position: 'absolute',
    top: '-2%',
    flex: 1,
  },
});

export default styles;
