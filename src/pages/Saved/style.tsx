import { StyleSheet } from 'react-native';
import { colors, size } from '../../globals/Useful';
import '../../assets/Fonts/Lato-Bold.ttf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: colors.specialGold,
    borderWidth: 2,
    paddingTop: '7%',
    paddingBottom: '34%',
    backgroundColor: colors.lightTransBlack,
  },

  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    width: '100%',
  },

  vehicleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    paddingVertical: 18,
    width: '100%',
    marginBottom: 6,
    backgroundColor: colors.middleTransBlack,
    elevation: 300,
    borderRadius: 10,
    borderBottomColor: colors.specialGold,
    borderEndWidth: 2,
  },

  text: {
    fontSize: size.sFont,
    color: 'white',
    letterSpacing: 1.6,
    fontWeight: '400',
    fontFamily: 'Anton-Regular',
  },

  deleteIcon: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    elevation: 300,
  },

  navIconSearch: {
    position: 'absolute',
    top: '-2%',
    flex: 1,
  },

  shadowProps: {
    textShadowColor: colors.originalBlack,
    textShadowOffset: {
      width: 1,
      height: 1.8,
    },
    shadowOpacity: 0.17,
    textShadowRadius: 3.05,
  },

  filterContainer: {
    flex: 1,
    width: '64%',
    height: '18%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '7.4%',
    left: '7%',
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderEndWidth: 1,
    borderTopColor: colors.specialGold,
    borderEndColor: colors.specialGold,
  },

  filterContain: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 40,
    left: '-8%',
  },

  carsFilter: {
    width: '50%',
    position: 'absolute',
    backgroundColor: colors.specialRed,
    borderColor: colors.specialGold,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 5,
    top: 0,
    left: 0,
  },

  motorcycleFilter: {
    width: '50%',
    position: 'absolute',
    backgroundColor: colors.specialRed,
    borderColor: colors.specialGold,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 5,
  },

  trucksFilter: {
    width: '50%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.specialRed,
    borderColor: colors.specialGold,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 5,
  },

  titleFilter: {
    fontSize: size.sFont,
    color: 'white',
    letterSpacing: 1.6,
    fontWeight: '400',
    fontFamily: 'Anton-Regular',
    textAlign: 'center',
  },

  closeIcon: {
    position: 'absolute',
    top: '-20%',
    right: '-5%',
  },
});

export default styles;
