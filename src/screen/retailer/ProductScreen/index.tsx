import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { color, windowWidth } from "../../../utils";
import { FontAwesome } from "@expo/vector-icons";
import Slide from "../../../components/SlideImage/Slide";
import ProductInfor from "../../../components/ProductInfor";
import TimeLineProduct from "../../../components/TimeLineProduct";
import BottomSideProductDetail from "../../../components/BottomSideProductDetail";
import { useSelector } from "react-redux";
import Quantity from "../../../components/QuantityProduct";
import AntDesign from "react-native-vector-icons/AntDesign";
import { showMessage, hideMessage } from "react-native-flash-message";
import ImageViewer from "react-native-image-zoom-viewer-fixed";

type Props = {};

const ProductScreen = (props: Props) => {
  const route = useRoute();
  const navigation = useNavigation();

  //   console.log(route.params);
  const item = route.params;

  const addtocart = () => {
    // addCart(data);
    showMessage({
      message: "Success",
      description: `${item?.product?.productName} is added to cart.`,
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
      title: item?.product?.productName,
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
            <Slide item={item?.product} />
            <ProductInfor
              data={item?.product}
              //   setIsImageViewVisible={setIsImageViewVisible}
            />
            <TimeLineProduct data={item?.product.dates} />
          </View>
        )}
      />
      <View style={[styles.bottomSide, styles.shadow]}>
        <Quantity quantity={1} />
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
