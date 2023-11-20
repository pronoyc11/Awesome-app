import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const InputPlace = (props) => {
  
  return (
    <View style={styles.textInputStyle}>
      <TextInput
        style={{
          color: "blue",
          width: "80%",
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7,
        }}
        placeholder="Add a place"
        value={props.value}
        onChangeText={(text) => props.setValue(text)}
      />
      <Button
        title="Add"
        onPress={() => {
          if (props.value !== "") {
            props.addPlace([
              
              {
                key: Math.random().toString(),
                item: props.value,
                image: {
                  uri:
                    "https://images.unsplash.com/photo-1582555599578-5068e6474677?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGhha2ElMjBjaXR5fGVufDB8fDB8fHww",
                },
              },
            ]);
            //make input value empty here
          }
        }}
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
