import React,{useState} from "react";
import { View, TouchableOpacity } from "react-native";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import HeaderRight from "../components/HeaderRight";
import { SearchBar } from "react-native-elements";
import Colors from "../constants/Colors";

const Navbar = ({props}) => {
    const [full, setFull] = useState(false);
    const [text, setText] = useState("");
  return (
    <View>
      {full ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => setFull(false)}
            style={{ alignSelf: "center", marginLeft: 4 }}
          >
            {/* <EvilIcons name="arrow-left" size={30} /> */}
            <MaterialCommunityIcons name="arrow-left" size={25} />
          </TouchableOpacity>

          <Animatable.View animation="slideInRight" style={{ width: "100%" }}>
            <SearchBar
              inputStyle={{ backgroundColor: "#ffffff" }}
              lightTheme
              inputContainerStyle={{ backgroundColor: "#ffffff" }}
              round
              containerStyle={{
                backgroundColor: "#f2f2f2",
                width: "95%",
                borderColor: "red",
              }}
              onCancel={() => console.log("can")}
              onChangeText={(text) => setText(text)}
              value={text}
              leftIconContainerStyle={{ backgroundColor: "#ffffff" }}
              rightIconContainerStyle={{ backgroundColor: "#ffffff" }}
              searchIcon={
                <TouchableOpacity onPress={() => console.log("ser")}>
                  <EvilIcons name="search" size={28} />
                </TouchableOpacity>
              }
              autoFocus={true}
            />
          </Animatable.View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            marginVertical: 15,
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}
            style={{ alignSelf: "center", marginLeft: 4 }}
          >
            <MaterialCommunityIcons name="menu" size={32} />
          </TouchableOpacity>

          <View style={{ marginLeft: "auto", flexDirection: "row" }}>
            <TouchableOpacity onPress={() => setFull(true)}>
              <EvilIcons name="search" size={28} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
              style={{ marginHorizontal: 20 }}
            >
              <EvilIcons name="user" size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
              <EvilIcons name="cart" size={28} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Navbar;
