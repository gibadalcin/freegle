import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignContent: 'space-between',
    rowGap: 20,
    paddingTop: '50%',
    elevation: 300,
    paddingHorizontal: 14,
  },

  attention: {
    position: 'absolute',
    top: '18%',
    left: '-4%',
    marginHorizontal: 16,
    padding: 10,
    paddingBottom: 11,
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'yellow',
    opacity: 0.9,
  },

  statusResponse: {
    position: 'absolute',
    textAlignVertical: 'center',
    color: '#ffffff',
    borderWidth: 0.8,
    borderColor: 'yellow',
    marginHorizontal: 14,
    textAlign: 'center',
    width: '100%',
    top: '14%',
    fontSize: 20,
    elevation: 300,
    borderRadius: 10,
    paddingLeft: 22,
    paddingRight: 22,
    paddingVertical: 12,
    fontWeight: '300',
    lineHeight: 22,
  },

  arrowField: {
    flex: 1,
    position: 'absolute',
    left: '40%',
    bottom: '12%',
    elevation: 100,
    backgroundColor: '#000000',
    paddingHorizontal: 18,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: '#dfc691',
    borderRadius: 8,
  },

  containerPass: {
    justifyContent: 'center',
  },

  bar: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 2,
    top: -8,
    width: '100%',
  },

  passStrength: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 48,
    right: '18%',
  },

  passStrengthText: {
    fontSize: 22,
    opacity: 0.4,
  },

  eye: {
    position: 'absolute',
    right: 18,
    paddingTop: 2,
  },
});

export default styles;
