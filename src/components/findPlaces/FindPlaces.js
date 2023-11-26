import React, { useState } from 'react';
import {
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
import Placelist from '../placelist/Placelist';

import PlaceDetail from '../placeDetail/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace, deletePlace } from '../../redux/actionCreator';


const mapStateToProps = state =>{
  return {
    placeList:state.placeList
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    addPlace : place => dispatch(addPlace(place)),
    deletePlace: key => dispatch(deletePlace(key))
    
  }
}
const FindPlaces = (props) => {

  
   

   const [selectedPlace,setSelectedPlace] = useState(null);
  //   const onPressHandler = (item) => {
  //     alert(item);
  //   };
  
    const handleSelectedPlace = key =>{
  const place = props.placeList.find(place=> {
    return place.key === key ;
  })
  setSelectedPlace(place);
    }
  const handleModalOff = () =>{
    setSelectedPlace(null);
  }
  const handleDeleteItem = key =>{
  
  props.deletePlace(key);
  setSelectedPlace(null)
  }
    return (
      <View style={styles.container}>
       { selectedPlace && <PlaceDetail place={selectedPlace} handleModalOff={handleModalOff} handleDeleteItem={handleDeleteItem} />}

        <Placelist placeList={props.placeList} handleSelectedPlace={handleSelectedPlace} />
  
        {/* <Text>This is our text component,next we will look into the View component.</Text>
        <StatusBar style="auto" /> */}
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "",
      justifyContent: "flex-start",
      margin: 40,
      flexDirection: "column",
    },
    textInputStyle: {
      color: "blue",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(FindPlaces);