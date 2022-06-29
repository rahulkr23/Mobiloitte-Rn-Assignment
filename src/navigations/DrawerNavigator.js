
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "./CustomDrawer";
import MainStackNavigator from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
  
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      drawerPosition='left'
      drawerType="front"
      edgeWidth={100}
      hideStatusBar={false}
      overlayColor="#00000090"
      drawerStyle={{
        backgroundColor: '#fff',
        width: 280,
      }}
      screenOptions={{
        swipeEnabled: false,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#1B2631',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;