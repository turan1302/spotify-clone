import React, { Component } from 'react'
import { ScrollView, Text, View } from "react-native";
import AlbumHeader from "../../components/AlbumDetail/AlbumHeader";
import styles from "./styles";
import AlbumCover from "../../components/AlbumDetail/AlbumCover";
import AlbumContent from "../../components/AlbumDetail/AlbumContent";

export default class AlbumDetail extends Component {
  render() {
    const {item} = this.props.route.params;

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AlbumHeader/>
          <AlbumCover item={item}/>
          <AlbumContent item={item}/>
        </ScrollView>
      </View>
    )
  }
}
