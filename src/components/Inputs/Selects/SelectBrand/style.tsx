import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../../../../globals/Useful';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  selectField: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.specialTransRed,
    borderColor: colors.specialGold,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    shadow: 20,
    elevation: 300,
  },

  text: {
    fontSize: 18,
    letterSpacing: 1,
    color: colors.originalWhite,
    width: width - 122,
    textShadowColor: colors.originalBlack,
    textShadowOffset: {
      width: 1,
      height: 1.8,
    },
    shadowOpacity: 0.17,
    textShadowRadius: 3.05,
  },

  selectContain: {
    flex: 1,
    height: '120%',
    minHeight: 50,
    maxHeight: 50,
    paddingTop: 10,
    //paddingBottom: 24,
    borderBottomColor: colors.specialGold,
    borderBottomWidth: 0.8,
  },

  selectTitle: {
    fontSize: 20,
    letterSpacing: 1,
    color: colors.originalWhite,
    textAlign: 'center',
    minHeight: 40,
    textShadowColor: colors.originalBlack,
    textShadowOffset: {
      width: 1,
      height: 1.8,
    },
    shadowOpacity: 0.17,
    textShadowRadius: 3.05,
  },
  iconDown: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    flex: 1,
    fontSize: 18,
    letterSpacing: 1,
    color: colors.originalWhite,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: colors.originalBlack,
    borderBottomWidth: 1,
    borderColor: colors.specialGold,
  },

  icon: {
    position: 'absolute',
    right: 10,
  },
});

export default styles;
