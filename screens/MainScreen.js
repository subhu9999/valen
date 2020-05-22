import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  FlatList,
} from "react-native";

import * as Animatable from "react-native-animatable";
import Listing from "../components/Listing";
import ListingURL from "../components/ListingURL";
import Navbar from "../components/Navbar";

const MainScreen = (props) => {
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
    }).start();
  });

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const listings = [
    {
      title: "sweatshirt shorts regulat fit",
      image:
        "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_960_720.png",
      price: 799
      },
    {
      title: "2-pack regulat fit white t shirt",
      image:
        "https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png",
        price: 1250
      },
    {
      title: "product 1",
      image:
        "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_960_720.png",
        price: 990
      },
      {
        title: "sweatshirt shorts regulat fit",
        image:
          "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_960_720.png",
        price: 799
        },
      {
        title: "2-pack regulat fit white t shirt",
        image:
          "https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png",
          price: 1250
        },
      {
        title: "product 1",
        image:
          "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_960_720.png",
          price: 990
        }
  ];

  const navigate = useCallback((listing) =>{
    props.navigation.navigate('ListingDetailed',{listing: listing})
  },[])

  return (
    <View style={styles.screen}>
      <Navbar props={props} />
      <FlatList
        key={3}
        data={listings}
        renderItem={({ item, index }) => <Listing listing={item} navigate={navigate} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  dashboard: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
});

export default MainScreen;
