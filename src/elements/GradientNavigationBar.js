import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import MICON from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Appbar} from 'react-native-paper';
import {colors, deviceHeight, deviceWidth} from '../styles/variables';
import {TouchableOpacity} from 'react-native-gesture-handler';

const GradientNavigationBar = props => {
  const [flagMenu, setFlagMenu] = React.useState(true);

  const _goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.primary,
        width: deviceWidth,
        height: deviceHeight * 0.07,
      }}>
      {/* <Appbar.BackAction onPress={_goBack} style={{color: 'red'}} /> */}
      <Icon
        name={props.backIcon}
        size={35}
        color={props.backIconColor}
        onPress={() => _goBack()}
        style={{paddingLeft: 20}}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer();
        }}>
        <Icon name={props.menuIcon} size={35} color={colors.white} />
      </TouchableOpacity>

      <Appbar.Content
        title={props.title}
        subtitle={props.subtitle}
        color={props.titleColor}
        titleStyle={props.titleStyle}
        subtitleStyle={props.subtitleStyle}
      />
      <View style={{flexDirection: 'row', padding: 10}}>
        <MICON
          name={props.name2}
          size={props.size2}
          color={props.color2}
          onPress={props.onPress2}
        />
        {/* <Appbar.Action icon="cart" onPress={() => {}} /> */}
      </View>

      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity>
        <MICON
          name={props.name1}
          size={25}
          color={colors.white}
          onPress={props.onPress1}
          
        />
        </TouchableOpacity>
        {/* <Appbar.Action icon="cart" onPress={() => {}} /> */}
      </View>
    </View>
  );
};
export default GradientNavigationBar;

const styles = StyleSheet.create({});
