import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../../../../globals/Useful';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  selectField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 54,
    backgroundColor: colors.originalBlack,
    color: colors.originalWhite,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: colors.specialGold,
    borderWidth: 1,
    shadow: 20,
    elevation: 300,
  },

  text: {
    fontSize: 18,
    letterSpacing: 1,
    color: colors.originalWhite,
    width: width - 122,
  },

  icon: {
    color: colors.originalWhite,
    fontSize: 28,
  },
});

export default styles;
