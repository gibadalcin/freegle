import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../Globals/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  arrowField: {
    flex: 1,
    position: 'absolute',
    left: '38%',
    bottom: '10%',
    elevation: 100,
    backgroundColor: colors.originalBlack,
    paddingHorizontal: 18,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: colors.specialGold,
    borderRadius: 8,
  },

  resultContainer: {
    flex: 0.86,
    backgroundColor: colors.middleTransBlack,
    borderColor: colors.specialGold,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    shadow: 20,
    elevation: 300,
  },

  dataField: {
    flex: 0.5,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dataItemFields: {
    justifyContent: 'flex-start',
    flex: 1,
    width: '90%',
    paddingVertical: 22,
  },
  dataBigTextBrand: {
    fontSize: 44,
    minHeight: 40,
    textAlign: 'left',
    color: colors.originalWhite,
    top: '22%',
    flex: 0.6,
  },
  dataSmallTextModel: {
    width: '90%',
    minHeight: 40,
    fontSize: 22,
    top: 18,
    textAlign: 'left',
    color: colors.originalWhite,
  },

  dataBigTextYear: {
    fontSize: 74,
    minHeight: 40,
    textAlign: 'center',
    color: colors.originalWhite,
    flex: 0.4,
    marginTop: 28,
  },
  dataSmallTextRef: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.originalWhite,
    marginTop: 70,
    marginBottom: -80,
  },

  priceField: {
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 42,
  },
  priceText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 48,
    color: colors.specialGold,
    paddingHorizontal: 18,
    paddingVertical: 32,
  },

  resultFieldButtons: {
    position: 'absolute',
    flex: 0.2,
    marginTop: 0,
    left: '22%',
    bottom: '18%',
    borderColor: colors.specialGold,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 6,
    backgroundColor: colors.originalBlack,
  },
});

export default styles;
