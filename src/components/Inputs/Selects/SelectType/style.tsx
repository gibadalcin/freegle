import { StyleSheet } from 'react-native';
import { colors } from '../../../../globals';

const styles = StyleSheet.create({
  selectArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 300,
    marginBottom: 4,
  },
  vehicleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderWidth: 12,
    borderColor: colors.middleTransBlack,
    borderRadius: 100,
    width: 118,
    height: 118,
  },
  vehicleSelect: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 200,
    borderColor: colors.specialGold,
    borderWidth: 2,
  },
});

export default styles;
