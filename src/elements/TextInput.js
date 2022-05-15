import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, fontSize} from '../styles/variables';
const {width, height} = Dimensions.get('window');

const TextInput = ({
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry = false,
  value,
  onChangeText,
  Height = false,
  disabled = false,
  errorMessage,
  renderErrorMessage = false,
  keyboardType = 'default',
  maxLength = null,
  scrollFocus,
  scrollTop,
  onKeyPress,
  inputStyle,
  inputContainerStyle,
  editable,
}) => {
  return (
    <Input
      // label={value.length > 0 ? placeholder : null}
      placeholder={placeholder}
      placeholderTextColor={colors.lightGrey}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      onKeyPress={onKeyPress}
      inputStyle={inputStyle}
      numberOfLines={1}
      multiline={Height == true ? Height : Height}
      ic
      disabled={disabled}
      inputContainerStyle={inputContainerStyle}
      onFocus={scrollFocus}
      onBlur={scrollTop}
      maxLength={maxLength}
      errorMessage={errorMessage}
      renderErrorMessage={renderErrorMessage}
      keyboardType={keyboardType}
      editable={editable}
    />
  );
};

const styles = StyleSheet.create({
  //   inputContainer: {
  //     borderColor: colors.white,
  //     color: colors.lightGrey,
  //     borderWidth: 1,
  //     borderRadius: 10,
  //     marginVertical: 18,
  //     height: 40,
  //     width: width / 1.2,
  //     paddingRight: 10,
  //     backgroundColor: colors.white,
  //     shadowColor: colors.primary,
  //     elevation: 10,
  //     alignSelf: 'center',
  //   },
  //   inputStyles: {
  //     paddingLeft: 20,
  //     fontSize: fontSize.medium,
  //     color: colors.primary,
  //   },
});

export default TextInput;
