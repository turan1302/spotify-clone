import React, {Component} from 'react';
import { Dimensions, Image, Text, View } from "react-native";
import styles from "./styles";

export default class AlbumCover extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get('window'),
    }
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  }

  render() {
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';
    const {item} = this.props;

    return (
      <View>
        <View style={styles.image_container}>
          <Image style={styles.image(position,width,height)} resizeMode={"cover"} source={item.image} />
        </View>
        <View style={styles.title_area}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.created}</Text>
        </View>
      </View>
    );
  }
}
