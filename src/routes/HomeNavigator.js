import React, { Component } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
const Stack = createNativeStackNavigator();


export default class HomeNavigator extends Component {
  render() {
    return (
     <Stack.Navigator screenOptions={({route})=>{
       return {
         headerShown: false,
       }
     }}>
       <Stack.Screen name={"Home"} component={Home}/>
       <Stack.Screen name={"Favourite"} component={Favourite}/>
     </Stack.Navigator>
    );
  }
}
