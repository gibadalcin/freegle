import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flex: 0.24,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },

  selectField: {
    flex: 0.86,
    justifyContent: 'space-between',
    backgroundColor: '#00000099',
    borderColor: '#dfc691',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    shadow: 20,
    elevation: 300,
  },

  text: {
    fontSize: 18,
    letterSpacing: 1,
    color: '#ffffff',
    width: width - 122,
  },

  selectContain: {
    flex: 0.06,
    minHeight: 50,
    maxHeight: 50,
    paddingTop: 10,
    paddingVertical: 12,
    borderBottomColor: '#dfc691',
    borderBottomWidth: 0.8,
  },

  selectTitle: {
    fontSize: 20,
    letterSpacing: 1,
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
    paddingVertical: 0,
  },

  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    flex: 1,
    fontSize: 18,
    letterSpacing: 1,
    color: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#000000',
    borderBottomWidth: 0.8,
    borderColor: '#dfc691',
  },

  icon: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: 28,
    right: 10,
  },
});

export default styles;
