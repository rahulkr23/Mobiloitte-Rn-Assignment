import {StyleSheet, Dimensions, Platform} from 'react-native';

import {
  NAV_HEIGHT,
  TAB_HEIGHT,
  STATUSBAR_HEIGHT,
  deviceHeight,
  deviceWidth,
  spaceHeight,
  introSpaceHeight,
  colors,
  fontFamily,
  fontSize,
} from './variables';

// CommonStyles
export default CommonStyles = StyleSheet.create({
  normalPage: {
    flex: 1,
    backgroundColor: colors.white,
    ...Platform.select({
      android: {
        marginTop: 0,
      },
    }),
  },
  normalPageContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    ...Platform.select({
      android: {
        marginTop: 0,
      },
    }),
  },
  normalSinglePage: {
    flex: 1,
    height: deviceHeight,
    backgroundColor: '#9bbee1',
    ...Platform.select({
      android: {
        //  marginBottom: Constants.statusBarHeight,
      },
    }),
  },
  center: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  coloumn: {
    flexDirection: 'column',
  },
  wrapperBox: {
    marginVertical: 10,
  },
  noTabScrollView: {
    marginTop: 0,
  },
  introPageTextBox: {
    flex: 1,
    alignItems: 'center',
    marginTop: introSpaceHeight * 0.1,
  },
  introPageSubText: {
    width: deviceWidth - 75,
    height: 70,
    marginTop: 15,
    color: colors.grey,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
  },
  mainheadText: {
    width: deviceWidth - 75,
    fontSize: fontSize.extraLarge,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
  subHeadText: {
    width: deviceWidth - 75,
    fontSize: fontSize.medium,
    fontWeight: '500',
    color: colors.lightGrey,
    textAlign: 'center',
  },
  textofbutton: {
    width: deviceWidth * 0.2,
    color: colors.white,
    fontSize: fontSize.medium,
  },
  whiteButton: {
    width: deviceWidth * 0.35,
    height: deviceHeight * 0.07,
    color: colors.primary,
    fontSize: fontSize.medium,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.white,
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  btnText: {
    fontSize: fontSize.medium,
    color: colors.primary,
    fontWeight: '500',
  },
  btnTextColorWhite: {
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight: '600',
  },
});
