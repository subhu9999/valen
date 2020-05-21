import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import Colors from "../constants/Colors";

const Profile = (props) => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.main}>Hi,</Text>
        <Text style={styles.subText}>Vinod</Text>
      </View>
      <View>
        <Text style={styles.mainOption}>My Orders</Text>
        <Card>
          <TouchableOpacity>
            <Text>Blue Shirts x 2</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>Checked Pants x 1</Text>
            <Text>Pair Of Socks x 2</Text>
          </TouchableOpacity>
        </Card>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.mainOption}>My Account</Text>
        <TouchableOpacity>
          <Text style={styles.subOption}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.subOption}>Payment Details</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.mainOption}>Need Help ?</Text>
        <TouchableOpacity>
          <Text style={styles.subOption}>contact us</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.subOption}>sign out</Text>
        </TouchableOpacity>
      </View>
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

export default Profile;
