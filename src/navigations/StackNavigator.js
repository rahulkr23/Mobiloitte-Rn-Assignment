import React from "react";
import { View, textInput, Image } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Dashboard from '../screens/All Screens/Dashboard'
import Icon from 'react-native-vector-icons/Ionicons'
import StartUpScreen from "../screens/All Screens/StartUpScreen";
import AddTaskScreen from "../screens/All Screens/AddTaskScreen";
import HomeScreen from "../screens/All Screens/HomeScreen";

import DrawerNavigator from "./DrawerNavigator";
import PercentageBar from "../screens/All Screens/PercentageBar";
import AddList from "../screens/All Screens/AddList";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomDrawer } from "./CustomDrawer";
import SignInScreen from "../screens/All Screens/SignInScreen";
import SignUpScreen from "../screens/All Screens/SignUpScreen";
import PlusButtonScreen from "../screens/All Screens/PlusButtonScreen";
import Categories from "../screens/All Screens/Categories";
import AddTask from '../screens/All Screens/AddTask'
import MainApp from "../screens/All Screens/MettingCalender/MainApp";



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
      <Stack.Screen name="Dashboard" component={Dashboard} options={{
        title: "Manage Task",
        headerStyle: {
          backgroundColor: '#3f3849',
          elevation: 0
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={35}
            backgroundColor="#3f3849" color='#fff'
            onPress={() => navigation.openDrawer()} />

        ),
        headerRight: () => (
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <MaterialCommunityIcons
                name="calendar-check" size={30} style={{ marginRight: 10 }}
                backgroundColor="#3f3849" color='#fff'
                onPress={() => navigation.navigate('MainApp')} />



              <Icon.Button name="md-notifications-outline" size={30}
                backgroundColor="#3f3849" color='#fff'
                onPress={() => alert('no notifications')} />
            </View>
          </>

        ),

      }} />

      <Stack.Screen name="StartUpScreen" component={StartUpScreen}
        options={({ navigation }) => ({
          headerTitleStyle: {
            color: "#000"

          },

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
      <Stack.Screen name="MainApp" component={MainApp}
        options={({ navigation }) => ({
          title: 'Go Back',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#fff"

          },

          headerShown: true,
          headerStyle: {
            backgroundColor: '#3f3849',
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="arrow-back-sharp"
                size={30}
                backgroundColor="#3f3849"
                color="#fff"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
        options={({ navigation }) => ({
          headerTitleStyle: {
            color: "#000"
          },

          headerShown: false,
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

      <Stack.Screen name="SignInScreen" component={SignInScreen}
        options={({ navigation }) => ({
          // title: 'Electrical All Semester',
          //  headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#000"

          },

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
      <Stack.Screen name="AddTask" component={AddTask}
        options={({ navigation }) => ({
          title: 'Categories List',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#fff"

          },


          headerStyle: {
            backgroundColor: '#3f3849',
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="arrow-back-sharp"
                size={30}
                backgroundColor='#3f3849'
                color="#fff"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />

      <Stack.Screen name="SignUpScreen" component={SignUpScreen}
        options={({ navigation }) => ({
          // title: 'Electrical All Semester',
          //  headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#000"

          },

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

      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen}
        options={({ navigation }) => ({
          // title: 'Electrical All Semester',
          //  headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#000"

          },

          headerShown: false,
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
      <Stack.Screen name="PlusButtonScreen" component={PlusButtonScreen}
        options={({ navigation }) => ({
          title: 'Categories List',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#fff"
          },

          // headerShown: false,
          headerStyle: {
            backgroundColor: "#3f3849",
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="arrow-back-sharp"
                size={30}
                backgroundColor="#3f3849"
                color="#fff"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name="Categories" component={Categories}
        options={({ navigation }) => ({
          title: 'Project Categories',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#fff"
          },

          // headerShown: false,
          headerStyle: {
            backgroundColor: "#3f3849",
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Icon.Button
                name="arrow-back-sharp"
                size={30}
                backgroundColor="#3f3849"
                color="#fff"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name="AddList" component={AddList}
        options={({ navigation }) => ({

          headerTitleStyle: {
            color: "#000"

          },

          headerShown: false,
          headerStyle: {
            backgroundColor: '#fff',
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Entypo.Button
                name="cross"
                size={30}

                backgroundColor="#fff"
                color="#000"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),

          headerRight: () => (
            <AntDesign.Button style={{ marginRight: 10 }} name="check" size={25}
              backgroundColor="#fff" color='#000'
              onPress={() => alert('hi')} />
          ),


        })}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen}
        options={({ navigation }) => ({
          headerTitleStyle: {
            color: "#000"

          },

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

      <Stack.Screen name=" PercentageBar" component={PercentageBar}
        options={({ navigation }) => ({
          // title: 'Electrical All Semester',
          //  headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#000"

          },

          headerShown: false,
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