import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
import { Product, ProductIdItem } from "../../../types/models";
import { FontAwesome } from "@expo/vector-icons";
import { color, windowWidth } from "../../../utils";
import React, { useLayoutEffect, useState, useMemo } from "react";
import Slide from "../../../components/SlideImage/Slide";
import Quantity from "../../../components/QuantityProduct";
import ProductInfor from "../../../components/ProductInfor";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { showMessage, hideMessage } from "react-native-flash-message";
import { previousDay } from "date-fns";
import TimeLineProduct from "../../../components/TimeLineProduct";
import { getProductById } from "../../../api/product";
import { useDispatch, useSelector } from "react-redux";
import { loadDone, loadStart } from "../../../redux/features/load";
import { addProductToCart, getLenghtCart } from "../../../api/cart";

type Props = {};

const ProductInformation = React.memo(function ProductInformation({
  item,
}: {
  item?: Product;
}) {
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "#fff" }}
      data={[]}
      keyExtractor={(_, index) => `dom${index}`}
      ListEmptyComponent={null}
      renderItem={null}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => {
        return (
          <View style={{ flex: 1, marginTop: 10 }}>
            <Slide item={item?.image} />
            <ProductInfor data={item} />
            <TimeLineProduct data={item?.dates} />
          </View>
        );
      }}
    />
  );
});

const ProductScreen = (props: Props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [lenghtCart, setLenghtCart] = useState(0);

  // const item: Product = route.params as Product;

  const item: string = useMemo(() => {
    return route.params as unknown as string;
  }, [route.params]);

  const user = useSelector((state: any) => state?.auth?.user);
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product>();

  const callApi = async () => {
    dispatch(loadStart());
    const product = await getProductById(item, user.token, dispatch);
    setProduct(product);
    dispatch(loadDone());
  };

  useFocusEffect(
    React.useCallback(() => {
      callApi();
      getLenghtCart(setLenghtCart, user.token, dispatch);
      return () => {};
    }, [])
  );
  const addtocart = async () => {
    // addCart(data);
    const addProduct: ProductIdItem = {
      productId: item,
      quantity: String(quantity),
    };
    const responeAddProduct = await addProductToCart(
      user.token,
      dispatch,
      addProduct
    );

    showMessage({
      message: "Success",
      description: `${product?.productName} is added to cart.`,
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
      title: product?.productName,
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
          {lenghtCart !== 0 ? (
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 24,
                width: 24,
                height: 24,
                position: "absolute",
                top: -8,
                right: -8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "RobotoSlab-Medium",
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                {lenghtCart}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      ),
    });
  }, [item, navigation, lenghtCart]);

  return (
    <>
      <ProductInformation item={product} />
      <View style={[styles.bottomSide, styles.shadow]}>
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
            {product?.unit}
          </Text>
        </View>
        <View style={{ width: 1, height: "100%", backgroundColor: "#fff" }} />
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          amount={product?.amount}
        />
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
export default React.memo(ProductScreen);

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
