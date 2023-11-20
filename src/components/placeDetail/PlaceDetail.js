import React from 'react'
import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native'

const PlaceDetail = (props) => {
    
  return (
    <Modal style={styles.modalContainer}>
   
        <Text>
        {props.place.item}
        </Text>
        <View>
            <Image source={props.place.image} style={{width:"100%",height:500}} />
        </View>
        <View>
            <Button title='Delete' color="red" onPress={()=>props.handleDeleteItem(props.place.key)} />
            <Button title='Close' onPress={props.handleModalOff} />
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