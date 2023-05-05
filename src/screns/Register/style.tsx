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
    color: '#ffffff',
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
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    elevation: 300,
    paddingVertical: 12,
    paddingHorizontal: 4,
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
