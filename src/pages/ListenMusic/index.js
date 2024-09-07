import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as NavigationService from '../../NavigationService';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import TrackPlayer, {Event, State } from 'react-native-track-player';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const { height } = Dimensions.get('window');

export default class ListenMusic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideAnim: new Animated.Value(height),
      position: 0,
      duration: 0,
      isPlaying: true,
      isPlayerInitialized : false
    };

  }

  async componentDidMount() {
    Animated.timing(this.state.slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const { item } = this.props.route.params;

    try {

      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: item.id,
        url: item.music,
        title: item.name,
        artist: item.created,
      });

      await TrackPlayer.play();

      this.trackPlayerEventListener = TrackPlayer.addEventListener(
        Event.PlaybackState,
        this.onPlaybackStateChange,
      );

      this.updateInterval = setInterval(this.updateTrackInfo, 1000);
    } catch (error) {
      console.error('Error setting up TrackPlayer:', error);
    }
  }

  onPlaybackStateChange = async (state) => {
    if (state === State.Playing) {
      this.setState({ isPlaying: true });
    } else if (state === State.Paused || state === State.Stopped) {
      this.setState({ isPlaying: false });
    }
  };

  updateTrackInfo = async () => {
    try {
      const position = await TrackPlayer.getPosition();
      const duration = await TrackPlayer.getDuration();
      this.setState({ position, duration });
    } catch (error) {
      console.error('Error updating track info:', error);
    }
  };

  formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };


  togglePlay = async ()=>{
    if (this.state.isPlaying===true){
      await TrackPlayer.pause();
      this.setState({isPlaying : false});
    }else{
      await TrackPlayer.play();
      this.setState({isPlaying : true});
    }
  }

  seekBack = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position - 10);
  };

  seekForward = async () => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + 10);
  };

  removeAllTracks = async () => {
    try {
      await TrackPlayer.reset();
    } catch (error) {
      console.error('Error removing all tracks:', error);
    }
  }

  close = () => {
    Animated.timing(this.state.slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  closePage = () => {
    this.close();
    setTimeout(() => {
      this.removeAllTracks();
      NavigationService.back();
    }, 300);
  };

  async componentWillUnmount() {
    // Clean up event listeners and intervals
    if (this.trackPlayerEventListener) {
      this.trackPlayerEventListener.remove();
    }
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    try {
      await TrackPlayer.stop();
      await TrackPlayer.reset();
    } catch (error) {
      console.error('Error stopping or resetting TrackPlayer:', error);
    }
  }

  render() {
    const { slideAnim, isPlaying, position, duration } = this.state;
    const { item } = this.props.route.params;

    const animatedStyle = {
      transform: [{ translateY: slideAnim }],
    };

    return (
      <Animated.View style={[animatedStyle, { flex: 1 }]}>
        <LinearGradient colors={['#1DB954', '#1c1c1c']} style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header_area}>
              <TouchableOpacity onPress={() => this.closePage()}>
                <Entypo name={'chevron-thin-down'} color={'white'} size={20} />
              </TouchableOpacity>
              <Text style={styles.header_text}>
                {item.name}
              </Text>
              <Entypo name={'dots-three-vertical'} size={20} color={'white'} />
            </View>
            <View style={styles.image_cover_area}>
              <Image
                style={styles.image_style}
                source={item.image}
              />
            </View>
            <View style={styles.item_info_area}>
              <View>
                <Text style={styles.item_title}>
                  {item.name}
                </Text>
                <Text style={styles.item_created}>
                  {item.created}
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <AntDesign name={'heart'} color={'#1DB954'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.progress_area}>
              <View
                style={styles.progress_background}>
                <View
                  style={styles.progress_circle_icon(position,duration)}
                />
                <View
                  style={styles.progress_circle_icon_background(position,duration)}
                />
              </View>
            </View>
            <View style={styles.duration_area}>
              <Text style={styles.duration_text}>{this.formatTime(position)}</Text>
              <Text style={styles.duration_text}>{this.formatTime(duration)}</Text>
            </View>
            <View style={styles.play_pause_icons_area}>
              <TouchableOpacity onPress={this.seekBack}>
                <Entypo
                  name="controller-fast-backward"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <Ionicons name="play-skip-back" size={30} color={'white'} />
              <TouchableOpacity onPress={this.togglePlay}>
               {isPlaying ? (
                 <AntDesign name="pausecircle" size={60} color="white" />
               ) : (
                 <Entypo name="controller-play" size={60} color="white" />
               )}
             </TouchableOpacity>
              <Ionicons name="play-skip-forward" size={30} color={'white'} />
              <TouchableOpacity onPress={this.seekForward}>
                <Entypo
                  name="controller-fast-forward"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </Animated.View>
    );
  }
}
