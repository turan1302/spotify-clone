import React, { Component } from "react";
import Routes from "./src/routes";
import TrackPlayer, { Capability } from "react-native-track-player";

export default class App extends Component {
  async componentDidMount() {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
        Capability.SeekTo,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
    });
  }

  render() {
    return <Routes />;
  }
}
