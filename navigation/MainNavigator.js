import React from "react";
import {
  SafeAreaView,
  Platform,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

import Colors from "../constants/Colors";
import MainScreen from "../screens/MainScreen";
import SourceScreen from "../screens/SourceScreen";
import DestinationScreen from "../screens/DestinationScreen";
import SearchBar from "../components/SearchBar";
import SearchRight from "../components/SearchRight";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderRight from "../components/HeaderRight";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.accent : "",
  },
  headerTintColor: Platform.OS === "android" ? Colors.primary : Colors.primary,
};

const PlainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
    },
    Cart:{
      screen: Cart
    },
    Destination: DestinationScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ResultsNavigator = createStackNavigator(
  {
    Source: {
      screen: SourceScreen,
    },
    Destination: DestinationScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const CustomDrawer = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ marginVertical: 30, alignSelf: "center" }}>
      <Image source={require('../assets/logo.png')} style={{width: 120,height: 70}}/>
      <Text style={{color: Colors.primary,alignSelf:'center',fontSize: 22}}>My Store</Text>
    </View>

    <ScrollView>
      <DrawerItems {...props} />
      <View style={{ alignSelf: "center" }}>
        <TouchableOpacity>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const MainNavigator = createDrawerNavigator(
  {
    Dashboard: PlainNavigator,
    Results: ResultsNavigator,
    Profile: Profile,
  },
  {
    contentComponent: CustomDrawer,
  }
);

export default createAppContainer(MainNavigator);
