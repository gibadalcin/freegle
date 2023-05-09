import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignContent: 'space-between',
    rowGap: 20,
    elevation: 300,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  attention: {
    position: 'absolute',
    top: '13%',
    left: 8,
    marginHorizontal: 16,
    padding: 10,
    paddingBottom: 11,
    borderRadius: 50,
    opacity: 0.9,
  },

  replyStatus: {
    position: 'absolute',
    textAlignVertical: 'center',
    alignItems: 'center',
    color: '#ffffff',
    marginHorizontal: 14,
    textAlign: 'center',
    width: '100%',
    height: 90,
    top: '12%',
    fontSize: 20,
    elevation: 300,
    borderRadius: 10,
    paddingLeft: 22,
    paddingRight: 22,
    fontWeight: '300',
    lineHeight: 22,
  },

  replyTextStatus: {
    position: 'absolute',
    width: '88%',
    height: 90,
    textAlignVertical: 'center',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    elevation: 300,
    paddingVertical: 12,
    paddingHorizontal: 4,
    fontWeight: '300',
    lineHeight: 22,
  },

  containerPass: {
    justifyContent: 'center',
  },

  eye: {
    position: 'absolute',
    right: 18,
    paddingTop: 2,
  },

  form: {
    position: 'absolute',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    top: '34%',
  },

  customNav: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 230,
    borderColor: '#00000099',
    borderWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '-18%',
  },

  customNavButtom: {
    position: 'absolute',
    width: 228,
    height: 228,
    borderRadius: 230,
    borderColor: '#dfc691',
    borderWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#88888822',
  },
  reversePosition: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 228,
    height: 228,
    top: -40,
    borderRadius: 200,
    elevation: 300,
  },

  navIconBack: {
    position: 'absolute',
    top: '-20%',
    flex: 1,
  },

  navIconLogin: {
    position: 'absolute',
    top: '-2%',
    flex: 1,
  },

  navIconClose: {
    position: 'absolute',
    top: '38%',
    flex: 1,
  },
});

export default styles;
