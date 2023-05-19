import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  selectContainer: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 18,
    paddingHorizontal: 14,
  },

  selectFields: {
    justifyContent: 'center',
    rowGap: 22,
    borderRadius: 4,
    height: 54,
    fontSize: 18,
  },

  navIconRefresh: {
    position: 'absolute',
    top: '-2%',
    flex: 1,
  },
});

export default styles;
