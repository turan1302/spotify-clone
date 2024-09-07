import { ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import HomeHeader from "../../components/Home/HomeHeader";
import styles from "./styles";
import Filter from "../../components/Home/Filter";
import Playlists from "../../components/Home/Playlists";
import Artists from "../../components/Home/Artists";
import Albums from "../../components/Home/Albums";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
         <HomeHeader />
         <Filter/>
         <Playlists/>
         <Artists/>
         <Albums/>
       </ScrollView>
      </View>
    );
  }
}
