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

  arrowField: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    fontSize: 40,
    right: 20,
    top: 10,
  },
});

export default styles;
