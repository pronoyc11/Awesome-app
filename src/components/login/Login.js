import React from 'react'
import { Button, Text, View } from 'react-native'

const Login = (props) => {
 
  return (
    <View>
<Text>
    Hi this is our login page and is this working now but noo
</Text>
        <Button title="Log in" onPress={()=>{

props.navigation.navigate("Home");
        }} />
    </View>
  )
}

export default Login