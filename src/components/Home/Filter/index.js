import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import styles from "./styles";

export default class Filter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filterData : ["Müzik","Podcast"]
    }
  }

  render() {
    const {filterData} = this.state;

    return (
     <View style={styles.container}>
       <ScrollView showsHorizontalScrollIndicator={false} horizontal bounces>
         {filterData.map((item, index) => (
           <TouchableOpacity key={index} style={styles.button_area}>
             <Text style={styles.button_text}>{item}</Text>
           </TouchableOpacity>
         ))}
       </ScrollView>
     </View>
    );
  }
}
