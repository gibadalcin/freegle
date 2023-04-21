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
    //borderColor: '#FFFFFF',
    //borderWidth: 1,
    paddingHorizontal: '8%',
    marginTop: '44%',
    marginBottom: '10%',
    fontSize: 18,
  },

  arrowField: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    fontSize: 40,
    left: '22%',
    bottom: '20%',
  },
});

export default styles;
