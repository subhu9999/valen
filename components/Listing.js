import React from "react";
import { View, Text, Image, Button } from "react-native";
import { Item } from "react-navigation-header-buttons";

const Listing = (props) => {
   
  return (
    <View>
      <Image source={require("../assets/neem.jpg")} style={{width: 250 ,height: 300,resizeMode:'contain'}}/>
      <Button title='share'/>
      <Text>Neem</Text>
    </View>
  );
};
export default Listing;
