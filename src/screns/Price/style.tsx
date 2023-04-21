import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  arrowField: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    fontSize: 40,
    left: '18%',
    bottom: '20%',
  },

  resultContainer: {
    flex: 0.88,
    justifyContent: 'center',
    backgroundColor: '#2b464eee',
    borderColor: '#dfc691',
    borderTopRightRadius: 300,
    borderWidth: 1,
    shadow: 20,
    elevation: 300,
  },

  dataField: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 300,
  },
  dataItemFields: {
    justifyContent: 'flex-end',
    flex: 1,
    width: '90%',
    paddingVertical: 22,
  },
  dataBigTextBrand: {
    fontSize: 44,
    minHeight: 40,
    textAlign: 'left',
    color: '#ffffff',
    top: '22%',
    flex: 0.6,
  },
  dataSmallTextModel: {
    width: '90%',
    minHeight: 40,
    fontSize: 22,
    top: 18,
    textAlign: 'left',
    color: '#ffffff',
  },

  dataBigTextYear: {
    fontSize: 74,
    minHeight: 40,
    textAlign: 'center',
    color: '#ffffff',
    flex: 0.4,
    marginTop: 28,
  },
  dataSmallTextRef: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 50,
    marginBottom: -50,
  },

  priceField: {
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 42,
  },
  priceText: {
    width: '96%',
    textAlign: 'center',
    fontSize: 48,
    color: '#c8a75a',
    borderBottomColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 32,
  },

  resultFieldButtons: {
    flex: 0.2,
    marginTop: 12,
    left: '43%',
  },
});

export default styles;
