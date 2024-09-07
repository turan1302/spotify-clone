import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as NavigationService from "../../../NavigationService"
import styles from "./styles";

export default class AlbumHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>NavigationService.back()}>
          <AntDesign name={"arrowleft"} size={30} color={"white"}/>
        </TouchableOpacity>
      </View>
    )
  }
}
