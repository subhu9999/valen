import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import SearchRight from "./SearchRight";
import { SearchBar } from "react-native-elements";
import Colors from "../constants/Colors";

const HeaderRight = (props) => {
  const [full, setFull] = useState(false);
  const [text,setText]= useState("");

  let render;
  if (full) {
    render = (
      <HeaderButtons HeaderButtonComponent={SearchRight}>
        <Item title="Search" iconName="search" onPress={setFull(true)} />
        <Item title="user" iconName="user" />
        <Item title="fav" iconName="cart" />
      </HeaderButtons>
    );
  } else {
    render = (
      <SearchBar
        lightTheme
        round
        containerStyle={{ backgroundColor: Colors.accent,width: '100%' }}
        onCancel={() => console.log('can')}
        onChangeText={(text)=> setText(text)}
        value={text}
        leftIconContainerStyle={{backgroundColor:'red'}}
        searchIcon={<TouchableOpacity onPress={()=> console.log('ser')}></TouchableOpacity>}
      />
    );
  }
  return <View style={{flex: 1}}>{render}</View>;
};

export default HeaderRight;
