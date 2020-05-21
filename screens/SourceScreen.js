import React from "react";
import {
  View,
  StyleSheet,
  Text
} from "react-native";


const SourceScreen = props => {

  return (
    <View style={styles.screen}>
      <Text>source</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SourceScreen;
