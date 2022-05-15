import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CommonStyles from '../../styles/CommonStyles';
import {colors, fontFamily, fontSize, spaceHeight} from '../../styles/variables';
import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = props => {
  return (
    <View style={[CommonStyles.normalPage]}>
      <StatusBar backgroundColor={colors.white} />
      <Text style={styles.heading}>What do you want to create</Text>
      <View style={styles.fullField}>
        <View style={styles.colMainLeft}>
          <View style={styles.containerbox}>
            <View style={styles.iconBox}>
              <Image
                source={require('../../assets/images/work.png')}
                style={styles.iconImage}></Image>
              <Text style={styles.textstyle}>Work</Text>
            </View>
          </View>
          <View style={styles.containerbox}>
            <View style={styles.iconBox}>
              <Image
                source={require('../../assets/images/shopping.jpg')}
                style={styles.iconImage}></Image>
              <Text style={styles.textstyle}>Shopping</Text>
            </View>
          </View>
          <View style={styles.containerbox}>
            <View style={styles.iconBox}>
              <Image
                source={require('../../assets/images/wishlist.png')}
                style={styles.iconImage}></Image>
              <Text style={styles.textstyle}>Wish List</Text>
            </View>
          </View>
          <View style={styles.containerbox}>
            <View style={styles.iconBox}>
              <Image
                source={require('../../assets/images/birthday.jpg')}
                style={styles.iconImage}></Image>
              <Text style={styles.textstyle}>Birthday</Text>
            </View>
          </View>
        </View>

        <View style={styles.colMainRight}>
          <View style={styles.containerbox}>
            <View style={styles.iconBox}>
              <Image
                source={require('../../assets/images/personal.png')}
                style={styles.iconImage}></Image>
              <Text style={styles.textstyle}>Personal</Text>
            </View>
          </View>
          <View style={styles.containerbox}>
            <View style={styles.iconBox}>
              <Image
                source={require('../../assets/images/book.png')}
                style={styles.iconImage}></Image>
              <Text style={styles.textstyle}>Learning</Text>
            </View>
          </View>
          <View style={styles.containerbox}>
            <View style={styles.iconBox}>
              <Image
                source={require('../../assets/images/fitness.png')}
                style={styles.iconImage}></Image>
              <Text style={styles.textstyle}>Fitness</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('AddTask')}>
        <View style={styles.button}>
          <Text style={styles.buttontext}>GO AHEAD</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          marginBottom: 20,
          marginTop: 20,
          textAlign: 'center',
          color: colors.primary,
          fontSize: fontSize.header,
          fontFamily: fontFamily.bold,
        }}>
        SKIP
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    display: 'flex',
    fontSize: fontSize.title,
    fontFamily: fontFamily.bold,
    marginTop: 50,
    textAlign: 'center',
    color: colors.black,
  },
  containerbox: {
    width: 150,
    height: 80,
    backgroundColor: '#ffffff',
    borderColor: colors.primary,
    borderWidth: 0.2,
    marginLeft: 10,
    elevation: 5,
    shadowColor: colors.primary,
    margin: 10,
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: spaceHeight * 0.1,
  },
  colMainLeft: {
    flex: 1,
    marginRight: 8,
  },
  colMainRight: {
    flex: 1,
    marginLeft: 8,
  },
  iconImage: {
    width: 15,
    height: 15,
    marginLeft: 15,
    marginRight: 10,
  },
  iconBox: {
    flexDirection: 'row',
    marginVertical: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttontext: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fontFamily.bold,
    fontSize: fontSize.medium,
  },
  textstyle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    color: colors.primary,
  },
});
