import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignContent: 'space-between',
    rowGap: 28,
    paddingHorizontal: 24,
    paddingTop: '60%',
    paddingBottom: 20,
    elevation: 300,
  },

  statusLogin: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },

  containerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 8,
    marginHorizontal: 4,
    marginTop: -20,
  },

  loginTextPass: {
    fontSize: 17.4,
    fontWeight: '400',
    color: '#ffffff',
  },

  loginText: {
    fontSize: 17.4,
    fontWeight: '400',
    color: '#ffffff',
  },

  loginTextRegister: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
  },

  arrowField: {
    flex: 1,
    position: 'absolute',
    left: '43%',
    bottom: '13%',
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
