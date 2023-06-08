import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
import { Product } from "../../../types/models";
import { FontAwesome } from "@expo/vector-icons";
import { color, windowWidth } from "../../../utils";
import React, { useLayoutEffect, useState } from "react";
import Slide from "../../../components/SlideImage/Slide";
import Quantity from "../../../components/QuantityProduct";
import ProductInfor from "../../../components/ProductInfor";
import AntDesign from "react-native-vector-icons/AntDesign";
import TimeLineProduct from "../../../components/TimeLineProduct";
import { useNavigation, useRoute } from "@react-navigation/native";
import { showMessage, hideMessage } from "react-native-flash-message";

type Props = {};

const ProductScreen = (props: Props) => {
  const route = useRoute();
  const navigation = useNavigation();

  //   console.log(route.params);
  const item: Product = route.params as Product;

  const addtocart = () => {
    // addCart(data);
    showMessage({
      message: "Success",
      description: `${item?.productName} is added to cart.`,
      textStyle: { fontFamily: "RobotoSlab-VariableFont_wght" },
      titleStyle: { fontFamily: "RobotoSlab-Bold" },
      type: "success",
      backgroundColor: color.Primary,
      icon: "success",
      style: {
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical: 20,
      },
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item?.productName,
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
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            height: windowWidth * 0.1,
            width: windowWidth * 0.1,
            borderRadius: windowWidth * 0.05,
            marginBottom: Platform.OS === "ios" ? 2 : 0,
          }}
        >
          <FontAwesome name="angle-left" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            height: windowWidth * 0.1,
            width: windowWidth * 0.1,
            borderRadius: windowWidth * 0.05,
            marginBottom: Platform.OS === "ios" ? 2 : 0,
          }}
        >
          <AntDesign name="shoppingcart" size={24} color="black" />
          {/* {lenghtCart ? (
              <View
                style={{
                  backgroundColor: "red",
                  padding: 6,
                  borderRadius: 6,
                  position: "absolute",
                  top: 4,
                  right: 0,
                }}
              />
            ) : null} */}
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <>
      <FlatList
        style={{ flex: 1, backgroundColor: "#fff" }}
        data={[]}
        keyExtractor={(_e: any, i: { toString: () => string }) =>
          "dom" + i.toString()
        }
        ListEmptyComponent={null}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={{ flex: 1, marginTop: 10 }}>
            <Slide item={item} />
            <ProductInfor
              data={item}
              //   setIsImageViewVisible={setIsImageViewVisible}
            />
            <TimeLineProduct data={item?.dates} />
          </View>
        )}
      />
      <View style={[styles.bottomSide, styles.shadow]}>
        <Quantity quantity={1} />
        <View style={{ width: 1, height: "100%", backgroundColor: "#fff" }} />
        <View
          style={{
            // borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoSlab-Bold",
              color: "#fff",
              fontSize: 16,
            }}
          >
            Unit:
          </Text>
          <Text
            style={{
              fontFamily: "RobotoSlab-Bold",
              color: "#fff",
              fontSize: 16,
            }}
          >
            {item.unit}
          </Text>
        </View>
        <View style={{ width: 1, height: "100%", backgroundColor: "#fff" }} />

        <TouchableOpacity style={styles.addCartButton} onPress={addtocart}>
          <Text
            style={{
              fontFamily: "RobotoSlab-Bold",
              color: "#fff",
              fontSize: 16,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  bottomSide: {
    backgroundColor: color.Primary,
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
  addCartButton: {
    backgroundColor: color.Secondary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    width: 160,
    alignItems: "center",
  },
});
