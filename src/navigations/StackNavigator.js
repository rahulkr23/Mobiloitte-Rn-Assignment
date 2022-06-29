import React from "react";
import { View, textInput, Image, } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from "../screens/Home";
import Breeds from "../screens/Breeds";
import Stats from "../screens/Stats";
import Profile from "../screens/Profile";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomTabNavigator from "./TabNavigator";



const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTintColor: "#000",
  headerBackTitle: "Back",
};

const MainStackNavigator = ({ navigation }) => {


  return (

    <Stack.Navigator screenOptions={screenOptionStyle}>

      <Stack.Screen name={'Dashboard'} component={Home} options={{
        headerStyle: {
          backgroundColor: '#47CD75',
          elevation: 0
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 0,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={35}
            backgroundColor="#47CD75" color='#fff'
            onPress={() => navigation.openDrawer()} />

        ),
        headerRight: () => (
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>


                <Image
                  source={{ uri: 'https://i.postimg.cc/xdS37y2y/cowhead.png' }}
                  style={{
                    height: 55,
                    width: 55,
                    borderRadius: 30,
                    marginTop: 0,
                    marginRight: 100
                  }}

                  backgroundColor="#47CD75"
                  onPress={() => navigation.navigate('MainApp')} />

              </TouchableOpacity>

              <Icon.Button name="md-notifications-outline" size={30}
                backgroundColor="#47CD75" color='#fff'
                onPress={() => alert('no notifications')} />
            </View>
          </>

        ),

      }} />

      <Stack.Screen name="Home" component={Home}
        options={({ navigation }) => ({
          headerTitleStyle: {
          },

          headerShown: true,
          headerStyle: {
            backgroundColor:"#47CD75"
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="arrow-back-sharp"
                size={30}
                backgroundColor="#fff"

                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />

      <Stack.Screen name="Breeds" component={Breeds}
        options={({ navigation }) => ({
          title: 'Breeds',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#000"

          },

          headerShown: true,
          headerStyle: {
            backgroundColor: '#000',
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="arrow-back-sharp"
                size={30}
                backgroundColor="#fff"
                color="#000"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />

      <Stack.Screen name="Stats" component={Stats}
        options={({ navigation }) => ({
          title: "Stats",

          headerShown: true,
          headerStyle: {
            backgroundColor: '#fff',
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="arrow-back-sharp"
                size={30}
                backgroundColor="#fff"
                color="#000"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name="Profile" component={Profile}
        options={({ navigation }) => ({
          title: "Profile",
          headerShown: true,
          headerStyle: {
            backgroundColor: '#fff',
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="arrow-back-sharp"
                size={30}
                backgroundColor="#fff"
                color="#000"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />

    </Stack.Navigator>
  );
}

export default MainStackNavigator