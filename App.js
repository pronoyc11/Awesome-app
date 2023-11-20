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

import MainComponent from "./src/MainComponent";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

export default function App() {
 return (
  <Provider store={Store}>
      <MainComponent />
  </Provider>

 )
}

