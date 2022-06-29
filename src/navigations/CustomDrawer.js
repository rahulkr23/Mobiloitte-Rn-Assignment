import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



export function CustomDrawer(props) {

    return (
        <View style={{ flex: 1 }}>
            {/* <StatusBar translucent backgroundColor={'blue'}/> */}
            <DrawerContentScrollView {...props}>

                <View>
                    <Text style={styles.drawar}> Custom Drawer</Text>

                </View>

            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawar: {
        fontSize: 25
    }



});