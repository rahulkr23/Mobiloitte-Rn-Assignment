import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fontFamily, fontSize} from '../styles/variables';
const Input = ({
  label,
  textLabel,
  iconName,
  error,
  password,
  numberOfLines,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={[style.label, style.textLabel]}>
        {label}
        {textLabel}
      </Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? colors.red
              : isFocused
              ? colors.primary
              : colors.secondary,
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1.2,
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: colors.lightPrimary, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          numberOfLines={numberOfLines}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: colors.lightPrimary, flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: colors.lightPrimary, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: colors.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: colors.white,
  },
  textLabel: {
    marginVertical: 5,
    fontSize: fontSize.normal,
    color: colors.primary,
    fontFamily: fontFamily.medium,
  },
  inputContainer: {
    height: 55,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;
