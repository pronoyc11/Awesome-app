import React from 'react'
import { Button, Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
const PickImage = (props) => {

  const handleImagePick = async () =>{
    try{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        });
        if(!result.canceled){
           props.setImage(result.assets[0].uri);
        }
    }catch(e){
        console.log(e);
    }
  }
let showImages= null ;
if(props.image !== "") {
    showImages = <Image source={{uri:props.image}} style={{width:"100%",height:200}} />
}

  return (
    <View>
        {showImages}
    <Button title="Pick an image" onPress={handleImagePick}/>
  </View>
  )
}

export default PickImage