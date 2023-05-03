import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignContent: 'space-between',
    rowGap: 28,
    paddingHorizontal: 14,
    paddingTop: '48%',
    elevation: 300,
  },

  attention: {
    position: 'absolute',
    top: '12%',
    width: '100%',
    height: 100,
    marginHorizontal: 16,
    padding: 8,
  },

  statusResponse: {
    position: 'absolute',
    textAlignVertical: 'center',
    backgroundColor: '#3D3E0Ddd',
    color: '#ffffff',
    borderWidth: 0.5,
    borderColor: 'yellow',
    marginHorizontal: 14,
    textAlign: 'center',
    width: '100%',
    top: '12%',
    fontSize: 20,
    elevation: 300,
    borderRadius: 10,
    paddingLeft: 28,
    paddingRight: 16,
    paddingVertical: 12,
    fontWeight: '200',
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

  eye: {
    position: 'absolute',
    right: 18,
  },
});

export default styles;
