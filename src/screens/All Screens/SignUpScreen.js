import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  Button,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Input from '../../elements/Input';
import {
  colors,
  fontFamily,
  fontSize,
  deviceHeight,
  deviceWidth,
} from '../../styles/variables';
import Loader from '../../elements/Loader';

const SignUpScreen = ({ navigation }) => {


  const [inputs, setInputs] = useState('')
  const [email, setEmail] = useState([])
  const [fullname, setFullname] = useState([])
  const [phone, setPhone] = useState([])
  const [password, setPassword] = useState([])
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetch('https://task.infotonicsmedia.com/api/public/customer/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + authToken,
      },
      body: JSON.stringify({
        name: fullname,
        email: email,
        phone: phone,
        password: '0',

      })
    })
      .then(response => response.json())
      .then(res => console.warn(res))
      // .then(res=>{
      //     setData(res);          
      // })     
      .catch(error => {
        console.log(error);

      })
  }, []);

  const submit = () => {
    const body = { email, fullname, phone, password }
    console.warn(body);
  };


  const validate = () => {

    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('SignInScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
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
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text
          style={{
            color: colors.white,
            fontSize: fontSize.extraLarge,
            fontFamily: fontFamily.bold,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: colors.white,
            fontSize: fontSize.medium,
            fontFamily: fontFamily.regular,
            marginVertical: 10,
          }}>
          Enter Your Details to Register
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={text => setEmail(text)}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <Input
            onChangeText={text => setFullname(text)}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => setPhone(text)}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={text => setPassword(text)}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Loader visible={loading} />
          {/* <Button title="Register" onPress={validate} /> */}
          <View style={styles.endContainer}>
            {/* <TouchableHighlight style={styles.whiteButton} onPress={validate}> */}
            <TouchableHighlight style={styles.whiteButton} onPress={() => submit()}>

              <Text style={styles.btnText}>REGISTER</Text>
            </TouchableHighlight>
          </View>
          <Text
            onPress={() => navigation.navigate('SignInScreen')}
            style={{
              color: colors.white,

              textAlign: 'center',
              fontSize: 16,
              marginTop: 10
            }}>
            Already have account ?
            <Text
              style={{
                color: colors.white,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 18,
              }}>
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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



