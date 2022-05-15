import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, fontFamily, fontSize} from '../../styles/variables';
const {width, height} = Dimensions.get('window');
const StartUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={styles.firstPartbg}></View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <Text style={styles.texthead}>
          Manage{' '}
          <Text
            style={{
              color: '#8e64c3',
            }}>
            Work
          </Text>{' '}
          schedule easily
        </Text>
        <Text style={styles.textnormal}>
          You can schedule your work with us more esaily
        </Text>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          {/* <Entypo name="dot-single" size={30} color={'#eee0ff'} />
          <Entypo name="dot-single" size={30} color={'#eee0ff'} />
          <Entypo name="dot-single" size={30} color={'#ffc6bc'} /> */}
        </View>
        <View style={styles.endContainer}>
          <TouchableHighlight
            //underlayColor={colors.secondary}
            style={styles.whiteButton}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default StartUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

    ...Platform.select({
      android: {
        marginTop: 0,
      },
    }),
  },
  firstPartbg: {
    backgroundColor: colors.primary,
    height: height / 2.5,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 70,
    transform: [{skewY: '-8deg'}, {skewX: '17deg'}],
    marginTop: -30,
    marginLeft: -20,
    marginRight: -10,
    // transform: skewY(20deg)
  },
  endContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 40,
  },
  whiteButton: {
    width: 300,
    height: 50,
    fontSize: fontSize.header,
    backgroundColor: colors.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  btnText: {
    fontSize: 18,
    color: '#3f3849',
    fontFamily: fontFamily.bold,
  },
  texthead: {
    fontSize: fontSize.extraLarge,
    width: 300,
    textAlign: 'center',
    color: '#3f3849',
    fontFamily: fontFamily.extraBold,
  },
  textnormal: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    width: 220,
    textAlign: 'center',
    color: '#3f3849',
    marginTop: 30,
  },
});
