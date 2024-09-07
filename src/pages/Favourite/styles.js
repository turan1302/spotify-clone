import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  header_container: {flexDirection: 'row', alignItems: 'center'},
  search_container: {
    backgroundColor: '#317743',
    flex: 1,
    marginLeft: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  input_area: {flex: 1, height: 40, paddingLeft: 10, color: 'white'},

  page_title_area: {marginTop: 10},
  page_title: {color: 'white', fontWeight: 'bold', fontSize: 18},
  page_music_count: {color: 'white', fontSize: 15},

  list_area: {marginTop: 10},

  item_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  item_left_container : {flexDirection : "row",alignItems : "center",flex : 1},
  item_image : {width : 80,height : 80,borderRadius : 50},
  item_text_area : {marginLeft : 10,flex : 1},
  item_title : {fontSize : 15,fontWeight : "bold",color : "white"},
  item_created : {fontSize : 15,color : "#9f9f9f",marginTop : 4}
});

export default styles;
