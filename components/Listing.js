import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import { Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";

const Listing = (props) => {
  const { image, title, price } = props.listing;
  const {navigate} = props;
  //  console.log(props.listing)
  return (
    <TouchableNativeFeedback
      style={{
        width: "100%",
      }}
      onPress={() => navigate(props.listing)}
    >
      <View
        style={{
          width: "45%",
          marginHorizontal: 10,
          marginVertical: 5,
          borderColor: Colors.secondaryText,
          borderWidth: 0.1,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: "95%", height: 220, resizeMode: "cover" }}
        />
        <Text
          style={{
            width: "60%",
            color: "black",
            alignSelf: "flex-start",
            marginLeft: 10,
            marginVertical: 10,
            fontSize: 14,
            textTransform: "capitalize",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            alignSelf: "flex-start",
            marginLeft: 10,
          }}
        >
          $ {price}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
export default Listing;
