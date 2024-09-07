import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';

export default class HomeHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left_container}>
          <FontAwesome name={'user-circle-o'} color={'white'} size={40} />
          <Text
            style={styles.left_logo_text}>
            M. Fatih
          </Text>
        </View>
        <TouchableOpacity>
          <SimpleLineIcons name={'energy'} color={'white'} size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}
