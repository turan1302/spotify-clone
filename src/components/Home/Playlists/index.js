import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import playlists from "../../../data/playlists";
import styles from "./styles";
import * as NavigationService from "../../../NavigationService"

export default class Albums extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>NavigationService.navigate("Favourite")}>
        <View style={styles.item_area}>
          <LinearGradient colors={['#33006F', '#FFFFFF']}>
            <View
              style={styles.button_area}>
              <AntDesign name="heart" color="white" size={24} />
            </View>
          </LinearGradient>
          <View style={styles.button_text_area}>
            <Text style={styles.button_text}>Favori Müzikler</Text>
          </View>
        </View>
      </TouchableOpacity>

        {playlists.map((item,index)=>(
          <TouchableOpacity key={index} style={styles.item_area}>
              <View
                style={styles.button_area}>
               <Image style={styles.button_image} source={item.image}/>
              </View>
            <View style={styles.button_text_area}>
              <Text style={styles.button_text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
