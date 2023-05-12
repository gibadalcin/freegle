import { StyleSheet } from 'react-native';
import { colors } from '../../../../globals';

const styles = StyleSheet.create({
  selectArea: {
    marginBottom: 18,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 300,
  },
  vehicleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  vehicleSelect: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 200,
    borderColor: colors.specialGold,
    borderWidth: 2,
  },
});

export default styles;
