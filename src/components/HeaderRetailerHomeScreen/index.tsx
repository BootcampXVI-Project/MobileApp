import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { color, windowHeight, windowWidth } from "../../utils";

import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {
  user: any;
};

const HeaderRetailerHomeScreen: React.FC<Props> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.address}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="location-sharp" size={24} color="#f75040" />
        {/* <TouchableOpacity onPress={() => handlePressAddress(location)}>
          <Text numberOfLines={1} style={styles.address}>
            {location || undefined}
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default HeaderRetailerHomeScreen;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: windowHeight * 0.013,
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "RobotoSlab-Medium",
  },
  address: {
    fontSize: 14,
    color: "#1A2530",
    width: windowWidth * 0.5,
    fontWeight: "600",
  },
});
