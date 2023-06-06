import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
type Props = {
  item: {
    product: any;
    quantity: string;
  };
};

import Swipeable from "react-native-gesture-handler/Swipeable";
import { windowHeight, windowWidth } from "../../utils";
import Quantity from "../QuantityProduct";

const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: "#ff8303",
        justifyContent: "center",
        alignItems: "flex-end",
        marginVertical: 4,
      }}
    >
      <Text
        style={{
          color: "#1b1a17",
          fontWeight: "600",
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Delete
      </Text>
    </View>
  );
};
const swipeFromRightOpen = () => {
  alert("Swipe from right");
};
const ProductQuantity: React.FC<Props> = ({ item }) => (
  <Swipeable
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
  >
    <View style={[styles.container, styles.shadow]}>
      <Image
        style={styles.image}
        source={{
          uri: item?.product.image[0],
        }}
        resizeMode="cover"
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: 12,
          //   borderWidth: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Text style={styles.productName}>{item.product.productName}</Text>
        <Text style={styles.price}>{item.product.price}</Text>
        <Quantity quantity={item.quantity} />
      </View>
      {/* <Text style={styles.quantity}>x{item.quantity}</Text> */}
    </View>
  </Swipeable>
);

const styles = StyleSheet.create({
  image: {
    height: windowHeight * 0.08,
    width: windowWidth * 0.2,
    borderRadius: 12,
  },
  container: {
    backgroundColor: "#fff",
    marginVertical: 4,
    flexDirection: "row",
    borderRadius: 12,
    // flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    // borderWidth: 1,
  },
  productName: {
    fontFamily: "RobotoSlab-Medium",
    fontSize: 16,
  },
  price: {
    fontFamily: "RobotoSlab-VariableFont_wght",
    fontSize: 14,
  },
  description: {
    fontFamily: "RobotoSlab-VariableFont_wght",
    fontSize: 14,
    width: "98%",
  },
  quantity: {
    fontFamily: "RobotoSlab-Medium",
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 4,
  },
});

export default ProductQuantity;
