import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image_container : {alignItems : "center"},
  image : (position,width,height)=>({width: (position==="PORTRAIT") ? width*0.70 : height*0.70, height: 250}),
  title_area : {marginTop : 20},
  title : {color : "white",fontSize : 25,fontWeight : "bold"},
  subtitle : {color : "gray",fontSize : 13,marginTop : 5,fontWeight : "bold"}
});

export default styles;
