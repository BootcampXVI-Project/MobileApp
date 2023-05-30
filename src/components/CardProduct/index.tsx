import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { windowHeight, windowWidth } from "../../utils";
type Props = {
  title: string;
  styleTitle: any;
  styleIcon: any;
  styleContainer: any;
  onActive: boolean;
};

const CardProduct: React.FC<Props> = ({
  title,
  styleTitle,
  styleIcon,
  styleContainer,
  onActive,
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.title, styleTitle]}>{title}</Text>
      <Ionicons
        name={onActive ? "ios-caret-up" : "ios-caret-down"}
        size={30}
        style={[styles.icon, styleIcon]}
      />
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth,
    height: windowHeight * 0.06,
    paddingHorizontal: windowHeight * 0.01,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#0A3200",
    backgroundColor: "#0A3200",
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",
    fontFamily: "RobotoSlab-SemiBold",
    marginLeft: windowHeight * 0.02,
    marginTop: windowHeight * 0.015,
  },
  icon: {
    marginTop: windowHeight * 0.01,
  },
});
