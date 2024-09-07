import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import styles from "../Albums/styles";
import albums from "../../../data/albums";
import * as NavigationService from "../../../NavigationService";

export default class Albums extends Component {
  _renderItem = ({item,index})=>{
    return (
      <TouchableOpacity onPress={()=>NavigationService.navigate("AlbumDetail",{
        item : item
      })} key={index} style={[styles.item_area]}>
        <Image
          style={styles.item_image}
          source={item.image}
        />
        <View style={{width : 90}}>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={[styles.item_text]}>{item.name}</Text>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={{color : "#515151"}}>{item.created}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container_title}>Popüler Albümler</Text>
        <FlatList
          style={styles.flatlist_area}
          horizontal
          data={albums}
          keyExtractor={(item, index) => index}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
