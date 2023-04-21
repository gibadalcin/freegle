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
    backgroundColor: '#2b464eee',
    borderColor: '#dfc691',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    shadow: 20,
    bottom: 0,
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
    paddingVertical: 12,
  },

  selectTitle: {
    fontSize: 20,
    letterSpacing: 1,
    color: '#dfc691',
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
    marginHorizontal: 10,
    backgroundColor: '#00000099',
    textAlign: 'center',
    borderWidth: 0.8,
    borderColor: '#dfc691',
    borderRadius: 8,
    marginTop: 8,
  },

  icon: {
    position: 'absolute',
    color: 'transparent',
    fontSize: 28,
    right: 10,
  },
});

export default styles;
