import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    rowGap: 28,
    paddingHorizontal: 14,
    paddingBottom: 20,
    elevation: 300,
    justifyContent: 'center',
    marginTop: -36,
  },

  containerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 8,
    marginHorizontal: '14%',
    marginTop: -16,
  },

  loginText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#123242',
  },

  loginTextRegister: {
    fontSize: 18,
    fontWeight: '500',
    color: '#00000099',
  },

  loginTextLogin: {
    fontSize: 18,
    fontWeight: '500',
    color: '#00000099',
  },
});

export default styles;
