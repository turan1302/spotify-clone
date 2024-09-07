import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

export default class AlbumContent extends Component {
  render() {
    const {item} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.button_area}>
          <TouchableOpacity>
            <Feather name={'arrow-down-circle'} color={'green'} size={25} />
          </TouchableOpacity>
          <View style={styles.right_button_area}>
            <TouchableOpacity style={styles.right_button_first}>
              <Feather name={'shuffle'} color={'green'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name={'play'} color={'green'} size={50} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={styles.album_description_area}>
          <View>
            <Text style={styles.album_text}>
              Album {item.name}
            </Text>
            <Text style={styles.album_text}>
              Artist {item.created}
            </Text>
          </View>
          <TouchableOpacity>
            <Entypo name={'dots-three-vertical'} size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
