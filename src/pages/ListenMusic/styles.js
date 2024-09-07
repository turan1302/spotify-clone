import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container : { flex: 1, padding: 15 },
  header_area : { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 },
  header_text : { fontWeight: 'bold', color: 'white' },
  image_cover_area : { marginTop: 30 },
  image_style : { width: '100%', height: 350, borderRadius: 10 },

  item_info_area : { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  item_title : { color: 'white', fontWeight: 'bold', fontSize: 20 },
  item_created : { color: 'gray', fontSize: 15 },

  progress_area : {marginTop: 10,paddingBottom : 10},
  progress_background : {
    width: '100%',
    marginTop: 10,
    height: 3,
    zIndex : 111,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  progress_circle_icon : (position,duration)=>({
    backgroundColor : "white",
    height : "100%",
    width: `${
      (position / duration) * 100
    }%`,
  }),
  progress_circle_icon_background : (position,duration)=>({
    position: 'absolute',
    top: -3,
    zIndex : 111,
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    left: `${(position / duration) * 100}%`,
  }),

  duration_area : {marginTop : 5,flexDirection : "row",justifyContent : "space-between",alignItems : "center"},
  duration_text : {color : "white"},
  play_pause_icons_area : {flexDirection : "row",marginTop : 15,justifyContent : "space-between",alignItems : "center"}
});

export default styles;
