import Space from "../Space";
import React, { useState } from "react";
import { Product } from "../../types/models";
import { color, windowWidth } from "../../utils";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { formatNumberWithCommas } from "../../helper/money";
import { convertTimeString } from "../../helper/formatDate";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

type Props = {
  product: Product;
};

const NewProduct: React.FC<Props> = ({ product }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductScreen", product)}
    >
      <Image
        style={styles.image}
        source={{ uri: product.image[0] }}
        resizeMode="cover"
      />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "RobotoSlab-Bold",
            // marginBottom: 28,
            fontSize: 16,
          }}
          numberOfLines={1}
        >
          {product.productName}
        </Text>

        <Text
          style={{
            fontFamily: "RobotoSlab-Bold",
            marginVertical: 4,
            fontSize: 16,
            color: color.Primary,
          }}
        >
          {convertTimeString(product.dates[0].time).date}
        </Text>
        <Text
          style={{
            fontFamily: "RobotoSlab-SemiBold",
            // marginBottom: 28,
            fontSize: 14,
            color: color.Secondary,
          }}
          numberOfLines={1}
        >
          {product.supplier.fullName}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "RobotoSlab-Bold",
          color: color.Primary,
          fontSize: 16,
        }}
      >
        {formatNumberWithCommas(product.price)} VND
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginBottom: 8,
    marginHorizontal: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: 90,
    height: 90,
    // padding:12,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#F3F3F3",
  },
});

export default NewProduct;
