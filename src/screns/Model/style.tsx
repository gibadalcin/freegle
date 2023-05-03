import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  selectContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    rowGap: 30,
    borderRadius: 4,
    height: 54,
    paddingHorizontal: '8%',
    marginTop: '44%',
    marginBottom: '10%',
    fontSize: 18,
  },

  arrowField: {
    flex: 1,
    position: 'absolute',
    left: '38%',
    bottom: '9%',
    elevation: 100,
    backgroundColor: '#000000',
    paddingHorizontal: 18,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: '#dfc691',
    borderRadius: 8,
  },
});

export default styles;
