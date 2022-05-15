import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import GradientNavigationBar from '../../elements/GradientNavigationBar';
import Input from '../../elements/Input';

import { colors, fontFamily, fontSize, deviceHeight, deviceWidth, } from '../../styles/variables';

class AddTask extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      categories: '',
      descriptions: '',

    }

  }
  submit() {
    console.warn(this.state)
  }

  render() {

    return (


      <View style={CommonStyles.normalPage}>

        <View>
          <Text style={styles.heading}>What do you want to choose Your Categories</Text>

        </View>
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
            <Input
              textLabel="Projects"
              placeholder="Enter Projects Name"
              onChangeText={(text) => { this.setState({ name: text }) }}
            />
            <Input
              textLabel="Categories"
              placeholder="Enter your Project Categories"
              onChangeText={(text) => { this.setState({ categories: text }) }}
              numberOfLines={2}
            />
            <Input
              textLabel="Description"
              placeholder="Enter Short Descriptions"
              onChangeText={(text) => { this.setState({ descriptions: text }) }}
              numberOfLines={2}
            />


            <View style={styles.endContainer}>
              <TouchableHighlight
                //underlayColor={colors.secondary}
                style={styles.whiteButton}
                onPress={() => { this.submit() }}>
                <Text style={styles.btnText}>SUBMIT</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    );

  };
}

export default AddTask;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',

    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: colors.white,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    padding: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: 5,
    borderRadius: 3,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textLabel: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    color: colors.primary,
    paddingBottom: 5,
  },
  inputContainerSmall: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    height: 55,
    width: deviceWidth * 0.42,
    backgroundColor: colors.white,
    alignSelf: 'center',
  },
  inputStylesSmall: {
    paddingLeft: 10,
    fontSize: fontSize.medium,
    color: colors.primary,
  },
  picker: {
    width: deviceWidth - 58,
    height: 45,
    paddingLeft: 20,
    color: colors.lightPrimary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
  },
  dropdownBorder: {
    // paddingTop: 4,
    // paddingBottom: 4,
    width: deviceWidth - 42,
    height: 55,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    marginBottom: 25,
    paddingLeft: 10,
    backgroundColor: '#fff',
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
  heading: {
    display: 'flex',
    fontSize: fontSize.title,
    fontFamily: fontFamily.bold,
    marginTop: 50,
    textAlign: 'center',
    color: colors.black,
  },
});
