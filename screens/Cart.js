import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { Card } from "react-native-elements";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";

const Cart = (props) => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <View>
        <Card>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <Entypo name="cross" size={24} color="red" />
            </TouchableOpacity>
            <Text>Blue Shirts x 2</Text>
            <Text> ₹ 4200</Text>
          </View>
        </Card>

        <Card>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <Entypo name="cross" size={24} color="red" />
            </TouchableOpacity>
            <Text>Checked Pants x 1</Text>
            <Text> ₹ 1200</Text>
          </View>
        </Card>

        <Card>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <Entypo name="cross" size={24} color="red" />
            </TouchableOpacity>
            <Text>Pair Of Socks x 2</Text>
            <Text> ₹ 300</Text>
          </View>
        </Card>
      </View>

      <View style={{ marginVertical: 20,alignSelf:'center' }}>
        <Text style={styles.mainOption}>
          Total <Text>₹ 6700</Text>
        </Text>
        
      </View>

      <Button title="proceed to payment" color="green" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: { color: Colors.primary, fontSize: 26 },
  subText: { color: Colors.primary, fontSize: 22 },
  mainOption: { color: Colors.primary, fontSize: 24, fontWeight: "bold" },
  subOption: {
    color: Colors.primary,
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 18,
  },
});

export default Cart;
