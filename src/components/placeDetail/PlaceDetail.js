import React from 'react'
import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const PlaceDetail = (props) => {
    
  return (
    <Modal style={styles.modalContainer}>
   
        <Text>
        {props.place.item}
        </Text>
        <View>
            <Image source={{uri:props.place.image}} style={{width:"100%",height:500}} />
        </View>
        <View style={{alignItems:"center",}}>
            <TouchableOpacity onPress={()=>props.handleDeleteItem(props.place.key)}>

            <Icon name='trash' size={60} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.handleModalOff}>

        <Icon name='times-circle' size={60} />
            </TouchableOpacity>
            
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalContainer:{
        marginTop:5
    }
})
export default PlaceDetail