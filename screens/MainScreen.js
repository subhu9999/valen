import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";
import HeaderRight from "../components/HeaderRight";
import { SearchBar } from "react-native-elements";
import Colors from "../constants/Colors";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Listing from "../components/Listing";
import ListingURL from "../components/ListingURL";


const MainScreen = (props) => {
  const [full, setFull] = useState(false);
  const [text, setText] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
    }).start();
  });

 
  return (
    <ScrollView style={styles.screen}>
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
            alignItems:'center',
            marginHorizontal: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}
            style={{ alignSelf: "center", marginLeft: 4 }}
          >
            <MaterialCommunityIcons name="menu" size={32} />
          </TouchableOpacity>

          <View style={{marginLeft: 'auto',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => setFull(true)} >
              <EvilIcons name="search" size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Profile')} style={{marginHorizontal: 20}}>
              <EvilIcons name="user" size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Cart')} >
              <EvilIcons name="cart" size={28} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* <Animated.View style={{opacity: fadeAnim}}><Text>mus fade</Text></Animated.View> */}

      <Animatable.Text animation="slideInRight">
        Zoom me up, Scotty
      </Animatable.Text>

      <Listing />
      <ListingURL/>
    </ScrollView>
  );
};

// MainScreen.navigationOptions = navData => {
//   return {

//   }
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    marginTop: 10,
    // alignItems: "center",
  },
});

export default MainScreen;
