import { Text, View } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../pages/Login";
import TabNavigator from "./TabNavigator";
import { navigationRef } from "../../src/NavigationService";
import AlbumDetail from "../pages/AlbumDetail";
import ListenMusic from "../pages/ListenMusic";

const Stack = createNativeStackNavigator();


export default class Routes extends Component {
  render() {
    return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={({route})=>{
        return {
          headerShown: false,
        }
      }}>

        <Stack.Screen name={"Login"} component={Login}/>
        <Stack.Screen name={"Tab"} component={TabNavigator}/>
        <Stack.Screen name={"AlbumDetail"} component={AlbumDetail}/>
        <Stack.Screen name={"ListenMusic"} component={ListenMusic}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
