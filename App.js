import "react-native-safe-area-context";
import "react-native-screens";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import Login from "./src/components/login/Login";
import NavigationTab from "./src/components/navigationTab/NavigationTab";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        {/* <MainComponent /> */}
        <Stack.Navigator>
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Home" component={NavigationTab} />
    
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
