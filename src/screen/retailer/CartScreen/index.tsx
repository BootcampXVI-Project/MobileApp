import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { color, windowHeight, windowWidth } from "../../../utils";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

type Props = {};

const CartScreen = (props: Props) => {
  const cart = useSelector((state: any) => state.cart.cart);
  console.log(cart);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "My cart",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "RobotoSlab-Bold",
      },
      headerStyle: {
        paddingBottom: 124,
        backgroundColor: color.Primary,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButton}
        >
          <FontAwesome name="angle-left" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ScrollView>
      <Text>CartScreen</Text>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: windowWidth * 0.1,
    width: windowWidth * 0.1,
    borderRadius: windowWidth * 0.5,
  },
});
