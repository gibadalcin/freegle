import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignContent: 'space-between',
    rowGap: 28,
    paddingHorizontal: 24,
    paddingTop: '50%',
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
    marginTop: -16,
  },

  loginTextPass: {
    fontSize: 17.4,
    fontWeight: '400',
    color: '#123242',
  },

  loginText: {
    fontSize: 17.4,
    fontWeight: '400',
    color: '#00000099',
  },

  loginTextRegister: {
    fontSize: 18,
    fontWeight: '400',
    color: '#00000099',
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
