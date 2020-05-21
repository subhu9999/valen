import React from "react";
import {Platform, View, Text, TextInput, TouchableNativeFeedback } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { HeaderButton } from "react-navigation-header-buttons";


const SearchRight = (props) => {
  const navigateToSearch = () => {
    const { navigation } = props;
    // console.log(props)
    navigation.navigate("Search");
  };
  return (
    <HeaderButton
      {...props}
      IconComponent={EvilIcons}
      iconSize={30}
      color={Colors.primary}
    />
  );
};

export default SearchRight;
