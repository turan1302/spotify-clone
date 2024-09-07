import React, { Component } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import favourite from "../../data/favourite";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import * as NavigationService from "../../NavigationService";

export default class Favourite extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText : ''
    }
  }

  _renderItem = ({item,index})=>(
    <TouchableOpacity onPress={()=>NavigationService.navigate("ListenMusic",{
      item : item
    })}>
    <View style={styles.item_container}>

      <View style={styles.item_left_container}>
        <Image style={styles.item_image} source={item.image}/>
        <View style={styles.item_text_area}>
          <Text style={styles.item_title}>{item.name}</Text>
          <Text style={styles.item_created}>{item.name}</Text>
        </View>
      </View>
        <Entypo name={"controller-play"} color={"white"} size={30}/>
    </View>
    </TouchableOpacity>

  )

  render() {
    const newList = favourite.filter((item,index)=>{
      return item.name.match(this.state.searchText);
    });


    return (
        <LinearGradient colors={['#1DB954', '#1c1c1c']} style={styles.container}>
         <View style={styles.header_container}>
            <TouchableOpacity onPress={()=>NavigationService.back()}>
              <AntDesign color={"white"} size={25} name={"arrowleft"}/>
            </TouchableOpacity>
           <View style={styles.search_container}>
             <AntDesign color={"white"} size={20} name={"search1"}/>
             <TextInput onChangeText={(e)=>this.setState({searchText : e})} style={styles.input_area} placeholderTextColor={"white"} placeholder={"Favori müziğini ara..."}/>
           </View>
         </View>
          <View style={styles.page_title_area}>
            <Text style={styles.page_title}>Favori Müzikler</Text>
            <Text style={styles.page_music_count}>{newList.length} Müzik</Text>
          </View>
            <FlatList showsVerticalScrollIndicator={false} style={styles.list_area} data={newList} keyExtractor={(item,index)=>index} renderItem={this._renderItem}/>
        </LinearGradient>
    )
  }
}
