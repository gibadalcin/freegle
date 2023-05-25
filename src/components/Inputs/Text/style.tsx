import { StyleSheet } from 'react-native';
import { colors } from '../../../globals/Useful';
const styles = StyleSheet.create({
  inputArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '.5%',
  },
  inputField: {
    width: '86%',
    backgroundColor: colors.middleLightTransBlack,
    paddingVertical: 8,
    borderRadius: 4,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: colors.specialGold,
    paddingHorizontal: 12,
    fontSize: 18,
    elevation: 20,
    color: colors.originalWhite,
  },
});

export default styles;
