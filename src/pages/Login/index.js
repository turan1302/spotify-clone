import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";

export default class Login extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.logo_area}>
            <Entypo
              name={'spotify'}
              style={{marginTop: 100}}
              color={'white'}
              size={70}
            />
            <Text
              style={styles.logo_text}>
              Millions of Songs Free on Spotify!
            </Text>
          </View>
          <View style={styles.button_area}>
            <TouchableOpacity onPress={()=>navigation.navigate("Tab")}
              style={styles.sign_spotify_button}>
              <Text style={styles.sign_spotify_button_text}>
                Sign In with Spotify
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.phone_number_button}>
                <AntDesign name={"mobile1"} size={20} color={"white"}/>
                <Text style={styles.phone_number_button_text}>Continue with phone number</Text>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.google_button}>
              <AntDesign name={"google"} size={20} color={"white"}/>
              <Text style={styles.google_button_text}>Continue with google</Text>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.facebook_button}>
              <AntDesign name={"facebook-square"} size={20} color={"white"}/>
              <Text style={styles.facebook_button_text}>Continue with Facebook</Text>
              <Text></Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
