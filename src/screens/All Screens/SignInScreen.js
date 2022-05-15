import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  Button,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {
  colors,
  deviceHeight,
  deviceWidth,
  fontFamily,
  fontSize,
} from '../../styles/variables';
import Input from '../../elements/Input';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../elements/Loader';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignInScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  // const validate = async () => {
  //   Keyboard.dismiss();
  //   let isValid = true;
  //   if (!inputs.email) {
  //     handleError('Please input email', 'email');
  //     isValid = false;
  //   }
  //   if (!inputs.password) {
  //     handleError('Please input password', 'password');
  //     isValid = false;
  //   }
  //   if (isValid) {
  //     login();
  //   }
  // };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');

      navigation.navigate('DashboardScreen');

    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text
          style={{
            color: colors.white,
            fontSize: fontSize.extraLarge,
            fontFamily: fontFamily.bold,
          }}>
          Log In
        </Text>
        <Text
          style={{
            color: colors.white,
            fontSize: fontSize.medium,
            fontFamily: fontFamily.regular,
            marginVertical: 10,
          }}>
          Enter Your Details to Login
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          {/* <Button title="Log In" onPress={validate} /> */}
          <View style={styles.endContainer}>
            <TouchableHighlight
              //underlayColor={colors.secondary}
              style={styles.whiteButton}
              onPress={() => navigation.navigate('DrawerNavigator')}>
              <Text style={styles.btnText}>LOGIN</Text>
            </TouchableHighlight>
          </View>
          {/* <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}> */}
          <View style={{ marginTop: 10, alignSelf: 'center', flexDirection: 'row' }}>
            <Text
              style={{
                color: colors.white,
                fontWeight: 'bold',

                fontSize: 16,


              }}>
              Don't have account ?

            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={{
                marginLeft: 10, color: colors.white,
                fontWeight: 'bold', fontSize: 16, marginTop: -1, display: 'flex'
              }}>Register</Text></TouchableOpacity>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  endContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 40,
  },
  whiteButton: {
    width: 300,
    height: deviceHeight * 0.08,
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
});
