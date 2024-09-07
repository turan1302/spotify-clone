import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : {marginTop : 10},
  button_area : {flexDirection : "row",justifyContent : "space-between",alignItems : "center"},
  right_button_area : {flexDirection : "row",justifyContent : "space-between",alignItems : "center"},
  right_button_first : {marginRight : 20},

  album_description_area : {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  album_text : {color: 'white', fontWeight: 'bold', fontSize: 18}
});

export default styles;
