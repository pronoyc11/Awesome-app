import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import InputPlace from '../inputPlace/InputPlace';
import { addPlace } from '../../redux/actionCreator';
import { connect } from 'react-redux';
import PickImage from '../pickImage/PickImage';

const mapDispatchToProps = dispatch =>{
  return {
    addPlace : place => dispatch(addPlace(place)),
 
  }
}


const SharePlaces = (props) => {
  const [value, setValue] = useState("");
  const [image,setImage] = useState("");




const handleAddingPlace = () =>{

  if (value === "" || image === "") 
  {
if(image === "" ){
  alert("Please add an image!")
}

  }else{
    props.addPlace(
      
      {
        key: Math.random().toString(),
        item: value,
        image: image
      }
    );
    //make input value empty here
    setImage("");
    props.navigation.navigate("Find Places");
  }

}



  return (<View>
<PickImage image={image} setImage = {setImage} />
    <InputPlace
    value={value}
    setValue={setValue}
  />
   <Button
        title="Add"
        onPress={() => {
  handleAddingPlace();
        }}
      />
  </View>
  )
}

export default connect(null,mapDispatchToProps)(SharePlaces);