
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigations/DrawerNavigator";

import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';




const AppStack = createStackNavigator();

const App = () => {
  
    return (
     <NavigationContainer>      
        <DrawerNavigator />
        </NavigationContainer>

    )
  }


export default App

