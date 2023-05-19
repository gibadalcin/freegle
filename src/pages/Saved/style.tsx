import { StyleSheet } from 'react-native';
import { colors, size } from '../../globals';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: colors.specialGold,
    borderWidth: 2,
    paddingTop: '8%',
    paddingBottom: '26%',
  },

  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    width: '100%',
  },

  vehicleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    paddingVertical: 18,
    width: '99%',
    marginBottom: 6,
    backgroundColor: colors.specialRed,
    elevation: 300,
    borderRadius: 10,
  },

  text: {
    fontSize: size.sFont,
    color: 'white',
    letterSpacing: 1.6,
    fontWeight: '500',
    fontFamily: 'Arial',
    lineHeight: 24,
  },

  navIconAlert: {
    position: 'absolute',
    top: '-2%',
    flex: 1,
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
});

export default styles;
