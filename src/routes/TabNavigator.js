import { Dimensions, Text, View } from "react-native";
import React, {Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions : Dimensions.get("window")
    }
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  }

  render() {
    const {width,height} = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <Tab.Navigator
        initialRouteName={'HomeNavigator'}
        screenOptions={({route, navigation}) => ({
          headerShown : false,
          tabBarStyle: ((route) => {
            const tabBarHidden = ["Favourite"];

            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
            if (tabBarHidden.includes(routeName)) {
              return { display: "none" }
            }else{
              return {backgroundColor : "black"}
            }
          })(route)
        })}>
        <Tab.Screen
          name={'HomeNavigator'}
          component={HomeNavigator}
          options={({route, navigation}) => {
            return {
              tabBarHideOnKeyboard: true,
              title: 'Anasayfa',
              tabBarIcon: ({focused}) => {
                return (
                  <Entypo
                    name={'home'}
                    color={focused ? 'white' : 'gray'}
                    size={20}
                  />
                );
              },
              tabBarActiveTintColor: 'white',
              tabBarInactiveTintColor: 'gray',
              tabBarLabelStyle: {
                marginBottom: (position==="PORTRAIT") ? 5 : null,
                color: 'white',
              },
            };
          }}
        />
        <Tab.Screen
          name={'ProfileNavigator'}
          component={HomeNavigator}
          options={({route, navigation}) => {
            return {
              tabBarHideOnKeyboard: true,
              title: 'Profil',
              tabBarIcon: ({focused}) => {
                return (
                  <FontAwesome5
                    name={'user-alt'}
                    color={focused ? 'white' : 'gray'}
                    size={20}
                  />
                );
              },
              tabBarActiveTintColor: 'white',
              tabBarInactiveTintColor: 'gray',
              tabBarLabelStyle: {
                marginBottom: (position==="PORTRAIT") ? 5 : null,
                color: 'white',
              },
            };
          }}
        />
      </Tab.Navigator>
    );
  }
}
