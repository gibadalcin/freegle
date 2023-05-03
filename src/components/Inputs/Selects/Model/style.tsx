import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  selectField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 54,
    backgroundColor: '#000000',
    color: '#FFFFFF',
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: '#dfc691',
    borderWidth: 1,
    shadow: 20,
    elevation: 300,
  },

  text: {
    fontSize: 18,
    letterSpacing: 1,
    color: '#ffffff',
    width: width - 122,
  },

  icon: {
    color: '#ffffff',
    fontSize: 28,
  },
});

export default styles;
