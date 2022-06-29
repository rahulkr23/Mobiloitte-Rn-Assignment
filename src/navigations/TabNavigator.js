
import React from "react";
import { Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./StackNavigator";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Breeds from "../screens/Breeds";
import Stats from "../screens/Stats";
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#fff',

                activeBackgroundColor: '#47CD75',
                inactiveBackgroundColor: '#47CD75'

            }}
        >

            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={{ uri: 'https://i.postimg.cc/xdS37y2y/cowhead.png' }}
                            style={{
                                height: 35,
                                width: 35,
                                borderRadius: 30,
                                marginTop: 0,
                                // marginRight: 100
                            }} />
                    ),
                }}
            />

            <Tab.Screen
                name="Breeds"
                component={Breeds}
                options={{
                    tabBarLabel: 'Breeds',
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="apps" size={25} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Stats"
                component={Stats}
                options={{
                    tabBarLabel: 'Stats',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-box-outline" size={30} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-person-circle-outline" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;