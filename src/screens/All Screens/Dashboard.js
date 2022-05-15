import { StatusBar, StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import CommonStyles from '../../styles/CommonStyles';
import GradientNavigationBar from '../../elements/GradientNavigationBar';
import PercentageBar from './PercentageBar';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState } from 'react';
import {
  colors,
  fontFamily,
  fontSize,
  deviceHeight,
  deviceWidth,
} from '../../styles/variables';
import TextInput from '../../elements/TextInput';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MICON from 'react-native-vector-icons/MaterialCommunityIcons';
import AD from 'react-native-vector-icons/AntDesign';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native-paper';



const Dashboard = props => {

  const onSelectSwitch = index => {
    alert('Selected index: ' + index);
  };

  return (
    <>
      <View style={[CommonStyles.normalPageContainer]}>
        <StatusBar backgroundColor={colors.primary} />
        <GradientNavigationBar
          title="Hello,"
          subtitle="Charles"
          titleStyle={{
            color: colors.white,
            fontSize: fontSize.medium,
            fontFamily: fontFamily.regular,
            paddingTop: 10,
          }}
          subtitleStyle={{
            color: colors.white,
            fontSize: fontSize.title,
            fontFamily: fontFamily.bold,
          }}

        />

        <View style={[CommonStyles.wrapperBox]}>
          <TextInput
            placeholder="Find Your Task"
            leftIcon={<AD name="search1" color={colors.primary} size={20} />}
            inputContainerStyle={styles.inputContainer}
            inputContainer={styles.inputContainer}
          />
          <View
            style={[
              CommonStyles.row,
              {
                justifyContent: 'space-between',
                marginVertical: 20,
                marginHorizontal: 30,
              },
            ]}>
            <Text style={styles.textCategory}>Category</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Categories')}>
              <MICON name="dots-horizontal" size={35} color={colors.white} />
            </TouchableOpacity>
          </View>

          <View style={styles.subContainer}>
            <View style={[CommonStyles.row]}>
              <View style={styles.addButtonView}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('AddTaskScreen')}>
                  <View style={styles.box1}>
                    <Text style={styles.boxtexthead}>Product</Text>
                    <Text style={styles.boxtextsubhead}>Design</Text>
                    <Text style={styles.boxtextnum}>23 Projects</Text>
                    <View style={{ marginVertical: 25, flexDirection: 'row' }}>
                      <Text style={styles.boxtextmoreinfo}>More Info</Text>
                      <View
                        style={{
                          backgroundColor: colors.white,
                          width: 30,
                          height: 30,
                          marginTop: 10,
                        }}>
                        <Ionicons
                          name="arrow-forward"
                          size={25}
                          color={colors.skyblue}
                          textAlign={'center'}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {/*  */}
              <View style={styles.addButtonView2}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('AddTaskScreen')}>
                  <View style={styles.box2}>
                    <Text style={styles.boxtexthead}>Product</Text>
                    <Text style={styles.boxtextsubhead}>Design</Text>
                    <Text style={styles.boxtextnum}>23 Projects</Text>
                    <View style={{ marginVertical: 25, flexDirection: 'row' }}>
                      <Text style={styles.boxtextmoreinfo}>More Info</Text>
                      <View
                        style={{
                          backgroundColor: colors.white,
                          width: 30,
                          height: 30,
                          marginTop: 10,
                        }}>
                        <Ionicons
                          name="arrow-forward"
                          size={25}
                          color={colors.lightgray}
                          textAlign={'center'}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/*  */}

            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text2}>Latest Project</Text>
              <TouchableOpacity onPress={() => alert('In Development')}>
                <Text style={styles.text3}>See More</Text>
              </TouchableOpacity>

            </View>


            <View style={{ marginLeft: 30, marginTop: 15 }}>


              <View style={styles.card}>

                <Text style={{ marginLeft: 25, marginTop: 10, fontSize: 20 }}> <Text style={{ fontWeight: 'bold', color: '#fff' }}>Creating</Text> a Library </Text>

                <View style={{ marginTop: 10, marginLeft: 30 }}>
                  <View style={{ width: '60%', justifyContent: 'center' }}>
                    <PercentageBar
                      height={15}
                      backgroundColor={'grey'}
                      completedColor={colors.primary}
                      percentage={'55%'}

                    />
                  </View>

                </View>
                <TouchableOpacity>
                  <View style={{ width: 120, height: 30, backgroundColor: '#fff', marginLeft: 30, borderRadius: 10, }}>
                    <Text style={{ alignSelf: 'center', marginTop: 4, fontWeight: 'bold' }}>Open Project</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('PlusButtonScreen')}>
              <View style={styles.iconContainer}>
                <Icon name="add" color="white" size={30} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: colors.secondary,
    borderWidth: 0.5,
    borderRadius: 50,
    marginVertical: 5,
    height: 'auto',
    width: deviceWidth / 1.2,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: colors.white,

    alignSelf: 'center',
  },
  inputStyles: {
    paddingLeft: 20,
    fontSize: fontSize.medium,
    color: colors.primary,
  },
  textCategory: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.header,
  },
  subContainer: {
    display: 'flex',
    backgroundColor: colors.white,
    height: deviceHeight * 0.59,
    width: deviceWidth * deviceWidth,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: deviceHeight * 0.1,
    bottom: 0,
  },
  box1: {
    width: 150,
    height: 170,
    borderRadius: 20,
    backgroundColor: colors.skyblue,
  },
  box2: {
    width: 150,
    height: 170,
    borderRadius: 20,
    backgroundColor: colors.lightgray,
  },

  addButtonView: {
    position: 'absolute',
    marginTop: deviceHeight * -0.1,
    left: deviceWidth / 17,
  },
  addButtonView2: {
    position: 'absolute',
    marginTop: deviceHeight * -0.1,
    left: deviceWidth / 2,
  },
  boxtexthead: {
    fontSize: fontSize.header,
    fontFamily: fontFamily.extraBold,
    color: colors.primary,
    width: 100,
    textAlign: 'center',
    paddingTop: 10,
  },
  boxtextsubhead: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    color: colors.primary,
    width: 80,

    textAlign: 'center',
  },
  boxtextnum: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.primary,
    paddingTop: 10,
    width: 100,
    textAlign: 'center',
  },
  boxtextmoreinfo: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
    color: colors.primary,
    paddingTop: 10,
    width: 100,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',

    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },

  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: colors.primary,
    elevation: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.skyblue,
  },
  text2: {
    marginTop: 130,
    marginLeft: 25,
    fontSize: 20

  },
  text3: {
    marginLeft: 100,
    fontSize: 15,
    marginTop: 140

  },
  card: {

    width: 300,
    height: 150,
    backgroundColor: colors.secondary,
    borderRadius: 20,



  }
});


