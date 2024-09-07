import {FlatList, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import artists from '../../../data/artists';
import styles from './styles';

export default class Artists extends Component {

  _renderItem = ({item,index})=>{
    return (
      <View key={index} style={styles.item_area}>
        <Image
          style={styles.item_image}
          source={item.image}
        />
        <Text style={styles.item_text}>{item.name}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container_title}>En İyi Sanatçılarınız</Text>
        <FlatList
          style={styles.flatlist_area}
          horizontal
          data={artists}
          keyExtractor={(item, index) => index}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
