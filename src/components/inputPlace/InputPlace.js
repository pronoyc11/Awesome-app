import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const InputPlace = (props) => {
  
  return (
    <View style={styles.textInputStyle}>
      <TextInput
        style={{
          color: "blue",
          width: "100%",
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7,
          margin:2
        }}
        placeholder="Name of the place"
        value={props.value}
        onChangeText={(text) => props.setValue(text)}
      />
     

    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    color: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});
export default InputPlace;
