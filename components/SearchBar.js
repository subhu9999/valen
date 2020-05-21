import React from "react";
import { View, Text, TextInput, TouchableNativeFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const SearchBar = (props) => {
  const navigateToSearch = () => {
    const { navigation } = props;
    // console.log(props)
    navigation.navigate("Search");
  };
  return (
    <TouchableNativeFeedback onPress={navigateToSearch}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text>Left</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default SearchBar;
