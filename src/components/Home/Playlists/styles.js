import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {marginTop : 15},
  item_area : {flexDirection : "row",backgroundColor : "#1e1e1e",alignItems : "center",marginBottom : 10},
  button_area : {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text_area : {marginLeft : 10},
  button_text : {color : "white",fontWeight : "bold",fontSize : 15},

  button_image : {width : 55,height : 55}
});

export default styles;
