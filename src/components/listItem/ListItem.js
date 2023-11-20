import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

const ListItem = ({handleSelectedPlace,item,itemKey}) => {
  return (
    <TouchableOpacity onLongPress={()=>handleSelectedPlace(itemKey)} onPress={()=>alert("hello")}>
<Text style={style.itemView}>
{item}
</Text>

    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
    itemView : {
        backgroundColor:"#eee",
        margin:5,
        padding:3
    }
})
export default ListItem