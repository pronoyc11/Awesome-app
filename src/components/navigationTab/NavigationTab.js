import React from "react";
import Icons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SharePlaces from "../sharePlaces/SharePlaces";
import FindPlaces from "../findPlaces/FindPlaces";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const NavigationTab = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarIcon:({color,size}) =>{
          return (
            <Icons name="ios-share" color={color} size={size} />
          )
        }
      }} name="Share Places" component={SharePlaces} />
      <Tab.Screen name="Find Places" component={FindPlaces}
options={{
  tabBarIcon:({color,size}) =>{
    return (
      <Icons name="md-map" color={color} size={size} />
    )
  }
}}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
