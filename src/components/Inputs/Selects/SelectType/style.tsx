import { StyleSheet } from 'react-native';
import { colors } from '../../../../globals/Useful';

const styles = StyleSheet.create({
  selectArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 300,
    marginBottom: 4,
  },
  vehicleArea: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderWidth: 12,
    borderColor: colors.middleTransBlack,
    borderRadius: 100,
    width: 118,
    height: 118,
  },
  vehicleSelect: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 200,
    borderColor: colors.specialGold,
    borderWidth: 2,
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
    backgroundColor: colors.specialRed,
  },

  noInternetText: {
    position: 'absolute',
    width: '88%',
    height: 90,
    textAlignVertical: 'center',
    color: colors.originalWhite,
    textAlign: 'center',
    fontSize: 20,
    elevation: 300,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontWeight: '300',
    lineHeight: 22,
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
});

export default styles;
