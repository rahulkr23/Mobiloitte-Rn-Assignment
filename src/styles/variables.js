import {Dimensions, Platform} from 'react-native';

const NAV_HEIGHT = 45;
const TAB_HEIGHT = 50;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const shadowOpt = {
  btnWidth: deviceWidth - 55,
  btnHeight: 45,
};

// Only for FindDoctors, FindHospital, Appointment screens
const spaceHeight = deviceHeight - 375 - 45;
// Only for Intro screens
const introSpaceHeight = deviceHeight - 364;

// Common gradient colors
const blueGradient = {
  colors: ['#fff', '#fff'],
  colorsStart: {x: 0.2, y: 0.4},
  colorsEnd: {x: 1.0, y: 1.0},
};

const colors = {
  white: '#fefdff',
  primary: '#3f3849',
  secondary: '#ffc6bc',
  skyblue: '#d2f5fe',
  lightPrimary: '#544c60',
  black: '#666',
  lightgray: '#eee0ff',
  red: 'red',
};

const fontFamily = {
  light: 'RobotoSlab-Light',
  regular: 'RobotoSlab-Regular',
  medium: 'RobotoSlab-Medium',
  semiBold: 'RobotoSlab-SemiBold',
  bold: 'RobotoSlab-Bold',
  extraBold: 'RobotoSlab-ExtraBold',
};

let fontSize = {
  extraLarge: 32,
  title: 22,
  header: 18,
  itemHeader: 20,
  medium: 16,
  normal: 14,
  small: 12,
};

let lineHeight = {
  title: 38,
  header: 30,
  itemHeader: 29,
  normal: 23,
  small: 30,
};

if (deviceWidth <= 320) {
  fontSize = {
    extraLarge: 27,
    title: 20,
    header: 16,
    itemHeader: 14,
    medium: 12,
    normal: 11,
    small: 10,
  };

  lineHeight = {
    title: 28,
    header: 20,
    itemHeader: 19,
    normal: 13,
    small: 20,
  };
}

export {
  NAV_HEIGHT,
  TAB_HEIGHT,
  STATUSBAR_HEIGHT,
  deviceHeight,
  deviceWidth,
  shadowOpt,
  spaceHeight,
  introSpaceHeight,
  blueGradient,
  colors,
  fontSize,
  fontFamily,
  lineHeight,
};
